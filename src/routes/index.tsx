import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const Route = createFileRoute("/")({
  component: () => {
    document.title = "risat";
    //dark
    const darkMode = JSON.parse(localStorage.getItem("mode") || "[]");
    const [dark, setDark] = useState(darkMode);

    useEffect(() => {
      localStorage.setItem("mode", JSON.stringify(dark));
    }, [dark]);

    const toggleMode = () => {
      setDark(!dark);
    };

    return (
      <article
        className={`${dark && "dark"} grid min-h-dvh w-full grid-rows-[auto_1fr_auto]`}
      >
        <Navbar toggleMode={toggleMode} />

        {/* hero */}
        <Home />

        {/* footer */}
        <Footer />
      </article>
    );
  },
});
