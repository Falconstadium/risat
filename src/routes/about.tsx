import { createFileRoute } from "@tanstack/react-router";

import About from "../components/About";
import Navbar from "../components/Navbar";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="grid min-h-dvh w-full grid-rows-[1fr]">
      <Navbar />

      {/* hero */}
      <About />
    </main>
  );
}
