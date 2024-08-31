import { createFileRoute, Link } from '@tanstack/react-router';
import risat from '../assets/img/risat (2).svg';
import Footer_About from '../components/Footer_About';
import { useEffect, useState } from 'react';
import Contact from '../components/Contact';

export const Route = createFileRoute('/contact')({
  component: () => {
    const darkMode = JSON.parse(localStorage.getItem('mode') || '[]');
    const [dark, setDark] = useState(darkMode);

    const toggleMode = () => {
      setDark(!dark);
    };

    useEffect(() => {
      localStorage.setItem('mode', JSON.stringify(dark));
    }, [dark]);

    return (
      <main
        className={`${dark && 'dark'} grid min-h-[100dvh] w-full grid-rows-[auto_1fr_auto]`}>
        <header className="flex justify-between items-center bg-indigo-700 text-white py-1 px-6 lg:px-12 lg:py-2">
          <div>
            <Link
              to="/"
              className="flex items-center gap-2 cursor-pointer tracking-wider text-sm">
              <img className="w-4" src={risat} alt="risat-logo" />
              risat
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/about"
              className="font-medium text-sm tracking-wide py-1 px-4 rounded-2xl transition-colors duration-200 ease-in-out hover:bg-black-500">
              About
            </Link>
            <Link
              to="/contact"
              className="font-medium text-sm tracking-wide py-1 px-4 rounded-2xl transition-colors duration-200 ease-in-out hover:bg-black-500 [&.active]:bg-black-500">
              Contact
            </Link>
            <button onClick={toggleMode}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-[18px] h-[18px] text-black-500 dark:text-light transition-colors duration-200 ease-in-out ml-3 lg:ml-5">
                <path d="M10 2a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 2ZM10 15a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 15ZM10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM15.657 5.404a.75.75 0 1 0-1.06-1.06l-1.061 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM6.464 14.596a.75.75 0 1 0-1.06-1.06l-1.06 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM18 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 18 10ZM5 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 5 10ZM14.596 15.657a.75.75 0 0 0 1.06-1.06l-1.06-1.061a.75.75 0 1 0-1.06 1.06l1.06 1.06ZM5.404 6.464a.75.75 0 0 0 1.06-1.06l-1.06-1.06a.75.75 0 1 0-1.061 1.06l1.06 1.06Z" />
              </svg>
            </button>
          </div>
        </header>

        {/* hero */}
        <Contact />

        {/* footer */}
        <Footer_About />
        
      </main>
    );
  },
});
