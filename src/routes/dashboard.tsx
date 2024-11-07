import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import Dashbord from "../components/Dashboard";
import NavbarDash from "../components/NavbarDash";

export const Route = createFileRoute("/dashboard")({
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
        <NavbarDash toggleMode={toggleMode} />

        {/* hero */}
        <Dashbord />
      </main>
    );
  },
});
