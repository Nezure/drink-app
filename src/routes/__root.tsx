import { AppSidebar } from "@/components/app-sidebar";
import { Header } from "@/components/header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <SidebarProvider className="flex flex-col">
      <AppSidebar />
      <Header />
      <Outlet />
      <TanStackRouterDevtools />
    </SidebarProvider>
  ),
});
