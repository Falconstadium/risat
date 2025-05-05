import { createFileRoute, Link } from "@tanstack/react-router";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import AnimationLoading from "../components/AnimationLoading";
import { themeContext } from "../context/theme";
import { Sun } from "../components/Sun";

export const Route = createFileRoute("/expense")({
  component: () => {
    // darkMode
    const { theme } = useContext(themeContext);

    const storedTrack = JSON.parse(localStorage.getItem("track") || "[]");

    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState<number>(0);
    const [transaction, setTransaction] = useState(storedTrack);
    const [edit, setEdit] = useState(null);

    const [load, setLoad] = useState(false);
    useEffect(() => {
      setLoad(true);
      setTimeout(() => {
        setLoad(false);
      }, 1000);
    }, []);

    useEffect(() => {
      localStorage.setItem("track", JSON.stringify(transaction));
    }, [transaction]);

    const submitForm = (e: any) => {
      e.preventDefault();
      if (edit) {
        const newTransaction = transaction.map((item: any) => {
          item.id === edit ? { id: edit, description, amount } : item;
        });
        setTransaction(newTransaction);
        setEdit(null);
      } else {
        setTransaction([
          ...transaction,
          { id: Date.now(), description, amount },
        ]);
      }
      setDescription("");
      setAmount(0);
    };

    const deleteItem = (item: any) => {
      const newTransaction = [...transaction];
      newTransaction.splice(item, 1);
      setTransaction(newTransaction);
    };

    const { t } = useTranslation("global");

    return (
      <main className={`${theme && "dark"}`}>
        {load ? (
          <AnimationLoading theme={theme} />
        ) : (
          <article className="grid min-h-dvh w-full grid-rows-[auto_1fr]">
            {/* Navbar */}
            <header className="bg-gradient-to-br from-indigo-700 to-indigo-500 px-6 py-5 text-light">
              <nav className="container mx-auto flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3">
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
                  <h3 className="font-Fancy text-lg font-semibold tracking-wide md:tracking-wider">
                    {t("dashboard.expense")}
                  </h3>
                </Link>
                <Sun />
              </nav>
            </header>

            <main className="flex w-full items-start justify-center bg-white dark:bg-black-500">
              <section className="container grid w-full animate-fadeIn gap-7 px-8 pt-10 lg:w-1/2">
                <form onSubmit={submitForm} className="grid gap-2">
                  <input
                    type="text"
                    placeholder={t("expense.description")}
                    onChange={(e) => setDescription(e.target.value)}
                    value={description || ""}
                    aria-label="Description"
                    className="rounded-sm border border-black-500 bg-transparent px-2 py-1 text-sm font-medium outline-none dark:border-light dark:text-light"
                  />
                  <input
                    type="number"
                    onChange={(e) => setAmount(Number(e.target.value))}
                    value={amount || 0}
                    aria-label="Amount"
                    className="rounded-sm border border-black-500 bg-transparent px-2 py-1 text-sm font-medium outline-none dark:border-light dark:text-light"
                  />
                  <button
                    type="submit"
                    aria-label="Add to Transaction"
                    className="rounded bg-blue-700 px-3 py-1 text-xs font-medium text-light transition-colors duration-300 ease-in-out hover:bg-blue-600 md:text-sm"
                  >
                    {t("expense.transaction")}
                  </button>
                </form>

                <section className="relative grid gap-2 px-8">
                  {transaction.map((item: any) => {
                    return (
                      <div
                        className="flex items-center justify-between gap-2"
                        key={item.id}
                      >
                        <div className="flex w-full items-center justify-between rounded-md border border-black-500 px-2 py-1 text-sm dark:border-light dark:text-light">
                          <p className="font-medium capitalize">
                            {item.description}
                          </p>
                          <p className="text-sm font-medium">{item.amount}</p>
                        </div>
                        <button
                          type="button"
                          onClick={(item) => deleteItem(item)}
                          className="flex justify-end rounded-full bg-red-700 text-light hover:bg-red-600"
                          aria-label="Delete Transaction"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="size-5 md:size-6"
                          >
                            <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                          </svg>
                        </button>
                      </div>
                    );
                  })}
                </section>
              </section>

              <div className="absolute bottom-6 right-4 flex items-center justify-center gap-2 text-sm dark:text-light md:bottom-8 md:right-8 md:text-base lg:bottom-10 lg:right-9">
                <p>{t("expense.link")}</p>
                <a
                  className="text-sm font-semibold underline hover:text-indigo-700"
                  href="https://fundstruck.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Expense
                </a>
              </div>
            </main>
          </article>
        )}
      </main>
    );
  },
});
