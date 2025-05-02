import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useRef,
  useState,
} from "react";

type AccordionProps = {
  children: React.ReactNode;
  value: string | null;
  onChange?: (value: string | null) => void;
  className?: string;
};

type AccordionItemProps = {
  children: React.ReactNode;
  value: string;
  trigger: React.ReactNode;
  className?: string;
};

interface AccordionContextType {
  selected: string | null;
  setSelected: Dispatch<SetStateAction<string | null>>;
}

const AccordionContext = createContext<AccordionContextType | null>(null);

export const Accordion: React.FC<AccordionProps> = ({
  children,
  value,
  onChange,
  ...props
}) => {
  const [selected, setSelected] = useState<string | null>(value);

  return (
    <ul {...props} className="grid w-full gap-4">
      <AccordionContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordionContext.Provider>
    </ul>
  );
};

export const AccordionItem: React.FC<AccordionItemProps> = ({
  children,
  value,
  trigger,
  ...props
}) => {
  const { selected, setSelected }: any = useContext(AccordionContext);

  const open = selected === value;

  const ref = useRef<HTMLDivElement>(null);

  return (
    <li
      className="rounded bg-gray-200 px-2 py-2 dark:bg-gray-900 dark:text-light"
      {...props}
    >
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className="flex items-center justify-between font-medium"
      >
        {trigger}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`lucide lucide-chevron-down-icon lucide-chevron-down transition duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </header>
      <div
        className="overflow-y-hidden transition-all duration-300 ease-in-out"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className="py-3 text-sm" ref={ref}>
          {children}
        </div>
      </div>
    </li>
  );
};
