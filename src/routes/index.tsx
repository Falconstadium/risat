import { createFileRoute } from "@tanstack/react-router";
import { useContext } from "react";

import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { themeContext } from "../context/theme";
import { langContext } from "../context/LangSwitcher";
import { WideSpin } from "../components/AnimationLoading";

export const Route = createFileRoute("/")({
  component: HomeRoute,
  pendingComponent: () => {
    const { theme } = useContext(themeContext);
    return (
      <div className={`${theme && "dark"} w-full dark:bg-black-100`}>
        <WideSpin theme={theme} />
      </div>
    );
  },
});

function HomeRoute() {
  document.title = "risat";
  //darkMode
  const { theme } = useContext(themeContext);
  const { hover } = useContext(langContext);

  return (
    <main className={`${theme && "dark"}`}>
      <article
        className={`grid min-h-dvh w-full grid-rows-[1fr_auto] ${hover ? "z-20 bg-black-100/80" : ""}`}
      >
        <Navbar />

        {/* hero */}
        <Home />

        {/* footer */}
        <Footer />
      </article>
    </main>
  );
}
