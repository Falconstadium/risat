import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <main className="grid min-h-[100dvh] w-full grid-rows-[auto_1fr_auto] bg-white font-inter dark:bg-black-500">
      <Outlet />
    </main>
  ),
});
