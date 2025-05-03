import { createFileRoute } from "@tanstack/react-router";
import { useContext } from "react";

import Navbar from "../components/Navbar";
import About from "../components/About";
import { themeContext } from "../context/theme";

export const Route = createFileRoute("/about")({
  component: () => {
    //dark
    const { theme, toggleTheme } = useContext(themeContext);

    return (
      <main
        className={`${theme && "dark"} grid min-h-dvh w-full grid-rows-[1fr]`}
      >
        <Navbar toggleTheme={toggleTheme} />

        {/* hero */}
        <About />
      </main>
    );
  },
});
