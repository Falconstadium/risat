interface props {
  transaction: [];
  deleteItem: (id: number) => void;
}

type ItemTypes = {
  id: number;
  description: string;
  amount: number;
};

const ExpenseList = ({ transaction, deleteItem }: props) => {
  const calculateTotalPrice = () => {
    return transaction.reduce(
      (total, item: { amount: number }) => total + item.amount,
      0,
    );
  };

  return (
    <section className="grid max-w-lg gap-2 px-8">
      {transaction.map((item: ItemTypes) => {
        return (
          <div
            className="flex max-w-lg animate-fadeIn items-center gap-3"
            key={item.id}
          >
            <div className="flex w-full items-center justify-between rounded-md border border-black-500 px-2 py-1 text-sm dark:border-light dark:text-light">
              <p className="font-medium capitalize">{item.description}</p>
              <p className="text-sm font-medium">{item.amount}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => deleteItem(item.id)}
                className="rounded-full bg-red-700 p-1 text-light transition-colors duration-300 ease-in-out hover:bg-red-600"
                aria-label="Delete Transaction"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x-icon lucide-x"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
              <button
                type="button"
                className="rounded-full bg-green-700 p-1 text-light transition-colors duration-300 ease-in-out hover:bg-green-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-square-pen-icon lucide-square-pen"
                >
                  <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
                </svg>
              </button>
            </div>
          </div>
        );
      })}
      <div className="absolute bottom-4 left-0 w-full px-4 pt-2 text-center dark:border-t-neutral-200 dark:text-light">
        <h5>Total Amounts:</h5>
        <p className="text-sm">${calculateTotalPrice()}</p>
      </div>
    </section>
  );
};

export default ExpenseList;
