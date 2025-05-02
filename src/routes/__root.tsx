import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <main className="grid min-h-dvh w-full grid-rows-[1fr_auto] bg-white font-inter dark:bg-black-500">
      <Outlet />
    </main>
  ),
});
