import { CreateDrink } from "@/components/CreateDrink";
import { Page } from "@/components/Page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/drinks/create/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Page header={"Create new drink"}>
      <CreateDrink />
    </Page>
  );
}
