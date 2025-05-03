import { Link } from "@tanstack/react-router";

const NavbarDash = ({ toggleMode }: any) => {
  return (
    <header className="bg-gradient-to-br from-indigo-700 to-indigo-500 px-6 py-3 text-light">
      <nav className="container mx-auto flex items-center justify-between">
        <div>
          <Link
            to="/"
            className="text-sm font-semibold tracking-wide md:text-base md:tracking-wider"
          >
            Risat.
          </Link>
        </div>
        <button onClick={toggleMode}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="ml-3 h-[22px] w-[22px] text-black-500 transition-colors duration-300 ease-in-out hover:scale-105 dark:text-light"
          >
            <path d="M10 2a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 2ZM10 15a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 15ZM10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM15.657 5.404a.75.75 0 1 0-1.06-1.06l-1.061 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM6.464 14.596a.75.75 0 1 0-1.06-1.06l-1.06 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM18 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 18 10ZM5 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 5 10ZM14.596 15.657a.75.75 0 0 0 1.06-1.06l-1.06-1.061a.75.75 0 1 0-1.06 1.06l1.06 1.06ZM5.404 6.464a.75.75 0 0 0 1.06-1.06l-1.06-1.06a.75.75 0 1 0-1.061 1.06l1.06 1.06Z" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default NavbarDash;
