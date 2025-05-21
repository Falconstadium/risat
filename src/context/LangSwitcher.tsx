import { createContext, useEffect, useRef, useState } from "react";

export const langContext = createContext<unknown | any>(undefined);

export const LangProvider = ({ children }: any) => {
  const [hover, setHover] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setHover(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = () => {
    setHover((prev) => !prev);
  };

  return (
    <langContext.Provider
      value={{ hover, setHover, handleClickOutside, buttonRef, menuRef }}
    >
      {children}
    </langContext.Provider>
  );
};
