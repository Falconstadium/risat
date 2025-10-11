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
              <p className="text-sm font-medium">${item.amount}</p>
            </div>

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
          </div>
        );
      })}
      {transaction.length != 0 && (
        <div className="absolute bottom-4 left-0 flex w-full items-center justify-center gap-1 px-4 pt-2 text-center dark:border-t-neutral-200 dark:text-light">
          <h5>Total Price:</h5>
          <p className="text-lg font-semibold">${calculateTotalPrice()}</p>
        </div>
      )}
    </section>
  );
};

export default ExpenseList;
