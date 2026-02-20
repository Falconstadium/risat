import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

import Dashbord from "../components/Dashboard";
import { Spinner } from "../components/ui/AnimationLoading";
import { Sun } from "../components/ui/Sun";
import { useTheme } from "../hooks/useTheme";

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
  pendingComponent: () => ChangeTheme(),
});

function ChangeTheme() {
  const { theme } = useTheme();
  return (
    <div className={`${theme && "dark"} w-full dark:bg-black-100`}>
      <Spinner theme={theme} />
    </div>
  );
}

function Dashboard() {
  const { t } = useTranslation("global");

  return (
    <article className="grid min-h-[100dvh] w-full grid-rows-[auto_1fr]">
      {/* Navbar */}
      <header className="bg-gradient-to-br from-indigo-700 to-indigo-500 px-4 py-4 text-light">
        <nav className="mx-auto flex max-w-5xl items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-6"
            >
              <g clipPath="url(#a)">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.25-7.25a.75.75 0 0 0 0-1.5H8.66l2.1-1.95a.75.75 0 1 0-1.02-1.1l-3.5 3.25a.75.75 0 0 0 0 1.1l3.5 3.25a.75.75 0 0 0 1.02-1.1l-2.1-1.95h4.59Z"
                  clipRule="evenodd"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path d="M0 0h20v20H0z" />
                </clipPath>
              </defs>
            </svg>
            <div className="relative">
              <h3 className="font-Fancy text-lg font-semibold tracking-wide transition-all duration-200 ease-in-out after:absolute after:-bottom-1 after:left-0 after:right-0 after:mx-auto after:h-1 after:w-0 after:rounded-md after:bg-white hover:after:w-16 md:tracking-wider">
                {t("dashboard.title")}
              </h3>
            </div>
          </Link>
          <Sun />
        </nav>
      </header>

      {/* hero */}
      <Dashbord />
    </article>
  );
}
