import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import About from "../components/About";

export const Route = createFileRoute("/about")({
  component: () => {
    //dark
    const darkMode = JSON.parse(localStorage.getItem("mode") || "[]");
    const [dark, setDark] = useState(darkMode);

    const toggleMode = () => {
      setDark(!dark);
    };

    useEffect(() => {
      localStorage.setItem("mode", JSON.stringify(dark));
    }, [dark]);

    return (
      <main
        className={`${dark && "dark"} grid min-h-dvh w-full grid-rows-[1fr]`}
      >
        <Navbar toggleMode={toggleMode} />

        {/* hero */}
        <About />
      </main>
    );
  },
});
