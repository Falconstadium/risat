import { createFileRoute, Link } from "@tanstack/react-router";
import { FormEvent, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { AnimationLoading } from "../components/AnimationLoading";
import ExpenseForm from "../components/expense/ExpenseForm";
import ExpenseList from "../components/expense/ExpenseList";
import { themeContext } from "../context/theme";

export const Route = createFileRoute("/expense")({
  component: Expense,
  pendingComponent: () => {
    const { theme } = useContext(themeContext);
    return (
      <div className={`${theme && "dark"} w-full dark:bg-black-100`}>
        <AnimationLoading theme={theme} />
      </div>
    );
  },
});

function Expense() {
  // darkMode
  const { theme } = useContext(themeContext);

  const storedTrack = JSON.parse(localStorage.getItem("track") || "[]");

  const [transaction, setTransaction] = useState(storedTrack);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("track", JSON.stringify(transaction));
  }, [transaction]);

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    if (edit) {
      const newTransaction = transaction.map((item: any) => {
        item.id === edit ? { id: edit, description, amount } : item;
      });
      setTransaction(newTransaction);
      setEdit(null);
    } else {
      setTransaction([...transaction, { id: Date.now(), description, amount }]);
    }
    setDescription("");
    setAmount(0);
  };

  const deleteItem = (id: number) => {
    setTransaction((prevTr: any[]) =>
      prevTr.filter((t: { id: number }) => t.id !== id),
    );
  };

  const { t } = useTranslation("global");

  return (
    <article
      className={`${theme && "dark"} grid min-h-dvh w-full grid-rows-[auto_1fr]`}
    >
      {/* Navbar */}
      <header className="bg-gradient-to-br from-indigo-700 to-indigo-500 px-4 py-3 text-light">
        <nav className="mx-auto max-w-2xl">
          <Link to="/dashboard" className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-6"
            >
              <g clipPath="url(#a)">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.25-7.25a.75.75 0 0 0 0-1.5H8.66l2.1-1.95a.75.75 0 1 0-1.02-1.1l-3.5 3.25a.75.75 0 0 0 0 1.1l3.5 3.25a.75.75 0 0 0 1.02-1.1l-2.1-1.95h4.59Z"
                  clipRule="evenodd"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path d="M0 0h20v20H0z" />
                </clipPath>
              </defs>
            </svg>
            <div className="relative">
              <h3 className="font-Fancy text-lg font-semibold tracking-wide transition-all duration-200 ease-in-out after:absolute after:-bottom-1 after:left-0 after:right-0 after:mx-auto after:h-1 after:w-0 after:rounded-md after:bg-white hover:after:w-16 md:tracking-wider">
                {t("dashboard.expense")}
              </h3>
            </div>
          </Link>
        </nav>
      </header>

      <main className="flex w-full items-start justify-center bg-white dark:bg-black-500">
        <section className="container grid w-full max-w-lg animate-fadeIn gap-7 px-8 pt-10">
          <ExpenseForm
            submitForm={submitForm}
            description={description}
            setDescription={setDescription}
            amount={amount}
            setAmount={setAmount}
          />

          <ExpenseList transaction={transaction} deleteItem={deleteItem} />
        </section>

        {/* <div className="absolute bottom-6 right-4 flex items-center justify-center gap-2 text-sm dark:text-light md:bottom-8 md:right-8 md:text-base lg:bottom-10 lg:right-9">
              <p>{t("expense.link")}</p>
              <a
                className="text-sm font-semibold underline hover:text-indigo-700"
                href="https://fundstruck.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Expense
              </a>
            </div> */}
      </main>
    </article>
  );
}
