import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Faq = ({ title, content }: any) => {
  const [show, setShow] = useState(false);

  return (
    <div className="mx-auto px-4 py-4 md:max-w-xl md:px-0">
      <div className="flex w-full items-center justify-between">
        <h4 className="font-medium first-letter:capitalize md:text-lg">
          {title}
        </h4>
        <button type="button" onClick={() => setShow(!show)}>
          {show ? (
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
              className={`lucide lucide-minus-icon lucide-minus transition duration-200 ease-in-out ${show ? "rotate-180" : ""}`}
            >
              <path d="M5 12h14" />
            </svg>
          ) : (
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
              className={`lucide lucide-minus-icon lucide-minus transition duration-200 ease-in-out ${show ? "rotate-180" : ""}`}
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          )}
        </button>
      </div>

      <AnimatePresence>
        {show ? (
          <motion.div
            className="pt-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`${show ? "opacity-100" : "opacity-0"}`}
            >
              {content}
            </motion.p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default Faq;
