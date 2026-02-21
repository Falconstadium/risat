import { createFileRoute } from "@tanstack/react-router";
import { useContext } from "react";

import Footer from "../components/Footer";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import { WideSpin } from "../components/ui/AnimationLoading";
import { LangContext } from "../context/LangSwitcher";

export const Route = createFileRoute("/")({
  component: HomeRoute,
  pendingComponent: ChangeTheme,
});

function ChangeTheme() {
  return (
    <div className="w-full dark:bg-black-100">
      <WideSpin />
    </div>
  );
}

function HomeRoute() {
  document.title = "risat";
  //darkMode
  const { hover } = useContext(LangContext);

  return (
    <article
      className={`grid min-h-dvh w-full grid-rows-[1fr_auto] ${hover ? "z-20 bg-black-100/80" : ""}`}
    >
      <Navbar />

      {/* hero */}
      <Home />

      {/* footer */}
      <Footer />
    </article>
  );
}
