import { createFileRoute, Link } from '@tanstack/react-router';
import Footer_About from '../components/Footer_About';
import risat from '../assets/img/risat (2).svg';
import { useEffect, useState } from 'react';
import Dashbord from '../components/Dashbord';

export const Route = createFileRoute('/dashbord')({
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
        <header className="flex justify-between items-center bg-indigo-700 text-white py-2 px-6 lg:px-12 lg:py-3">
          <div>
            <Link
              to="/"
              className="flex items-center gap-2 cursor-pointer tracking-wide">
              <img className="w-4" src={risat} alt="risat-logo" />
              risat
            </Link>
          </div>
          <button onClick={toggleMode}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5 text-black-500 dark:text-light transition-colors duration-300 ease-in-out">
              <path d="M10 2a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 2ZM10 15a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 15ZM10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM15.657 5.404a.75.75 0 1 0-1.06-1.06l-1.061 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM6.464 14.596a.75.75 0 1 0-1.06-1.06l-1.06 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM18 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 18 10ZM5 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 5 10ZM14.596 15.657a.75.75 0 0 0 1.06-1.06l-1.06-1.061a.75.75 0 1 0-1.06 1.06l1.06 1.06ZM5.404 6.464a.75.75 0 0 0 1.06-1.06l-1.06-1.06a.75.75 0 1 0-1.061 1.06l1.06 1.06Z" />
            </svg>
          </button>
        </header>
        
        {/* hero */}
        <Dashbord />

        {/* footer */}
        <Footer_About />
      </main>
    );
  },
});
