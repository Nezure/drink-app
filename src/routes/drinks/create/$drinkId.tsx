import { drinkQueryOptions } from "@/api/queryOptions/drinksQueryOptions";
import { CreateDrink } from "@/components/CreateDrink";
import { Page } from "@/components/Page";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/drinks/create/$drinkId")({
  component: RouteComponent,
});

function RouteComponent() {
  const params = Route.useParams();
  const { data: drink } = useSuspenseQuery(drinkQueryOptions(params.drinkId));

  return (
    <Page header={`Create drink based on ${drink.name}`}>
      <CreateDrink drink={drink} />
    </Page>
  );
}
