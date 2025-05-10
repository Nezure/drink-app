import { drinksQueryOptions } from "@/api/queryOptions/drinksQueryOptions";
import { DrinkCardList } from "@/components/drink-card-list";
import { Page } from "@/components/Page";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import "../App.css";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const { data: drinks } = useQuery(drinksQueryOptions());

  return (
    <Page header={"Browse drinks"}>
      <DrinkCardList drinks={drinks || []} />
    </Page>
  );
}
