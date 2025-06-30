import { Dispatch, FormEvent, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

interface props {
  submitForm: (e: FormEvent) => void;
  description: string;
  amount: number;
  setDescription: Dispatch<SetStateAction<string>>;
  setAmount: Dispatch<SetStateAction<number>>;
}

const ExpenseForm = ({
  submitForm,
  description,
  setDescription,
  amount,
  setAmount,
}: props) => {
  const { t } = useTranslation("global");

  return (
    <form onSubmit={submitForm} className="grid gap-2">
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
  );
};

export default ExpenseForm;
