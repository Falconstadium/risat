const AnimationLoading = ({ dark }: any) => {
  return (
    <>
      <div
        className={`${dark && "dark"} grid min-h-dvh w-full place-content-center bg-neutral-100 dark:bg-black-500`}
      >
        <div className="flex flex-row gap-2">
          <div className="h-4 w-4 animate-bounce rounded-full bg-indigo-700"></div>
          <div className="h-4 w-4 animate-bounce rounded-full bg-indigo-700 [animation-delay:-.3s]"></div>
          <div className="h-4 w-4 animate-bounce rounded-full bg-indigo-700 [animation-delay:-.5s]"></div>
        </div>
      </div>
    </>
  );
};

export default AnimationLoading;
