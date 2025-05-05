import { Link } from "@tanstack/react-router";

const NavbarDash = () => {
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
      </nav>
    </header>
  );
};

export default NavbarDash;
