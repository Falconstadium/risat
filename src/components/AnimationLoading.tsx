const AnimationLoading = () => {
  return (
    <>
      <div className="grid w-full place-content-center bg-white dark:bg-black-500">
        <div className="flex flex-row gap-2">
          <div className="h-3 w-3 animate-bounce rounded-full bg-indigo-700"></div>
          <div className="h-3 w-3 animate-bounce rounded-full bg-indigo-700 [animation-delay:-.3s]"></div>
          <div className="h-3 w-3 animate-bounce rounded-full bg-indigo-700 [animation-delay:-.5s]"></div>
        </div>
      </div>
    </>
  );
};

export default AnimationLoading;
