import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/test")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div className="bg-red-300">Hello "/test"!</div>;
}
