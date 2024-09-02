import { Link } from "@tanstack/react-router";

const Home = () => {
  return (
    <>
      <section className="grid place-content-center gap-3 px-4 dark:bg-black-500 dark:text-light lg:place-items-center lg:gap-5">
        <div className="grid place-content-center gap-2">
          <h1 className="text-center text-3xl font-bold leading-normal lg:text-5xl lg:leading-normal">
            Write, Save locally.
          </h1>
          <p className="text-center text-xs font-medium lg:text-sm">
            Your favorites tools in one place.
          </p>
        </div>
        <button className="rounded-md bg-blue-700 px-6 py-2 text-sm font-medium text-white transition-colors duration-300 ease-in-out hover:bg-blue-600">
          <Link to="/dashbord">Get Started</Link>
        </button>
      </section>
    </>
  );
};

export default Home;
