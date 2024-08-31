import { Link } from "@tanstack/react-router";

const Home = () => {
  return (
    <>
      <section className="grid place-content-center lg:place-items-center gap-3 lg:gap-5 dark:bg-black-500 dark:text-light">
        <h1 className="font-bold text-3xl lg:text-5xl text-center leading-normal lg:leading-normal">
          Your favorite <br />
          <span className="font-edu bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text font-medium">
            tools together
          </span>
          <br /> in one place.
        </h1>
        <button className="bg-blue-700 hover:bg-blue-600 transition-colors duration-300 ease-in-out font-medium text-white py-2 px-6 rounded-md text-sm">
          <Link to="/dashbord">Get Started</Link>
        </button>
      </section>
    </>
  );
};

export default Home;
