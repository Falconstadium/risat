import { createFileRoute } from "@tanstack/react-router";

import Footer from "../components/Footer";
import Home from "../components/Home";
import Navbar from "../components/Navbar";

export const Route = createFileRoute("/")({
  component: HomeRoute,
});

function HomeRoute() {
  document.title = "risat";

  return (
    <article className="grid min-h-dvh w-full grid-rows-[1fr_auto]">
      <Navbar />

      {/* hero */}
      <Home />

      {/* footer */}
      <Footer />
    </article>
  );
}
