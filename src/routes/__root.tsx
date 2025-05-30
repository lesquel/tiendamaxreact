import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Slider } from "../components/slider/slider";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <Slider />
        <main className="flex-1 p-8">
          <Outlet />
        </main>
        <TanStackRouterDevtools />
      </div>
    </>
  ),
});
