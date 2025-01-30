import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Contact from "../components/Contact";

export const Route = createFileRoute("/contact")({
  component: () => {
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
        className={`${dark && "dark"} grid min-h-[100dvh] w-full grid-rows-[auto_1fr]`}
      >
        <Navbar toggleMode={toggleMode} />

        {/* hero */}
        <Contact />
      </main>
    );
  },
});
