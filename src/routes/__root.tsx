import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <main className="font-inter">
      <Outlet />
    </main>
  ),
});
