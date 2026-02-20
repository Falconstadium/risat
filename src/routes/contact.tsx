import { createFileRoute } from "@tanstack/react-router";

import Contact from "../components/Contact";
import Navbar from "../components/Navbar";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="grid min-h-dvh w-full grid-rows-[1fr]">
      <Navbar />

      {/* hero */}
      <Contact />
    </main>
  );
}
