export const AnimationLoading = ({ theme }: any) => {
  return (
    <div
      className={`${theme && "dark"} grid min-h-dvh w-full place-content-center bg-neutral-100 dark:bg-black-500`}
    >
      <div className="flex flex-row gap-2">
        <div className="h-4 w-4 animate-bounce rounded-full bg-indigo-700"></div>
        <div className="h-4 w-4 animate-bounce rounded-full bg-indigo-700 [animation-delay:-.3s]"></div>
        <div className="h-4 w-4 animate-bounce rounded-full bg-indigo-700 [animation-delay:-.5s]"></div>
      </div>
    </div>
  );
};

export const Spinner = ({ theme }: any) => {
  return (
    <div
      className={`${theme && "dark"} grid min-h-dvh w-full place-content-center bg-neutral-100 dark:bg-black-500`}
    >
      <div className="h-20 w-20 animate-spin place-content-center rounded-full border-4 border-gray-300 border-t-blue-500"></div>
    </div>
  );
};

export const WideSpin = ({ theme }: any) => {
  return (
    <div
      className={`${theme && "dark"} grid min-h-dvh w-full place-content-center bg-neutral-100 dark:bg-black-500`}
    >
      <div className="relative">
        <div className="relative h-32 w-32">
          <div
            className="absolute h-full w-full animate-spin rounded-full border-[4px] border-gray-100/10 border-b-indigo-700 border-r-indigo-700"
            style={{ animationDuration: "3s" }}
          ></div>

          <div
            className="absolute h-full w-full animate-spin rounded-full border-[4px] border-gray-100/10 border-t-indigo-700"
            style={{
              animationDuration: "2s",
              animationDirection: "reverse",
            }}
          ></div>
        </div>

        <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-tr from-indigo-700/10 via-transparent to-indigo-700/5 blur-sm"></div>
      </div>
    </div>
  );
};
