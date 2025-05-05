import { createFileRoute } from "@tanstack/react-router";
import { useContext } from "react";

import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import { themeContext } from "../context/theme";

export const Route = createFileRoute("/contact")({
  component: () => {
    const { theme } = useContext(themeContext);

    return (
      <main
        className={`${theme && "dark"} grid min-h-dvh w-full grid-rows-[1fr]`}
      >
        <Navbar />

        {/* hero */}
        <Contact />
      </main>
    );
  },
});
