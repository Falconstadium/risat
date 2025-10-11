import { Dispatch, FormEvent, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

interface props {
  submitForm: (e: FormEvent) => void;
  description: string;
  amount: number;
  setDescription: Dispatch<SetStateAction<string>>;
  setAmount: Dispatch<SetStateAction<number>>;
  showForm: () => void;
}

const ExpenseForm = ({
  submitForm,
  description,
  setDescription,
  amount,
  setAmount,
  showForm,
}: props) => {
  const { t } = useTranslation("global");

  return (
    <main className="absolute left-0 top-0 z-50 flex min-h-dvh w-full items-center justify-center px-8 backdrop-blur-sm">
      <button
        type="button"
        className="absolute right-6 top-52 animate-fadeIn rounded-full bg-slate-900 p-1 transition duration-200 ease-in-out hover:bg-slate-800 lg:right-72 lg:p-2"
        onClick={showForm}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-6 text-white lg:size-7"
        >
          <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
        </svg>
      </button>
      <form
        onSubmit={submitForm}
        className="mx-auto grid w-full max-w-lg gap-2"
      >
        <input
          type="text"
          aria-label="Description"
          placeholder={t("expense.description")}
          value={description || ""}
          onChange={(e) => setDescription(e.target.value)}
          className="rounded-sm border border-black-500 bg-transparent px-2 py-1 text-sm font-medium outline-none dark:border-light dark:text-light"
        />
        <input
          type="number"
          aria-label="Amount"
          value={amount || 0}
          onChange={(e) => setAmount(Number(e.target.value))}
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
    </main>
  );
};

export default ExpenseForm;
