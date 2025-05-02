import { drinkQueryOptions } from "@/api/queryOptions/drinksQueryOptions";
import NumberSlider from "@/components/ui/number-slider";
import TableAdvanced from "@/components/ui/table-advanced";
import { TextHeader } from "@/components/ui/text-header";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/drinks/$drinkId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { drinkId } = Route.useParams();
  const { data: drink } = useSuspenseQuery(drinkQueryOptions(drinkId));
  const [servings, setServings] = useState<number>(1);

  if (!drink) return <div>404</div>;

  const ingredientColumns = [
    { key: "name", label: "Name" },
    { key: "category", label: "Category" },
    { key: "amount", label: "Amount" },
  ];

  const tableData = useMemo(() => {
    return drink.ingredients.map((ing) => {
      const asNum = parseFloat(ing.amount || "");
      return {
        name: ing.name,
        category: ing.category,
        amount: `${!isNaN(asNum) ? asNum * servings : ing.amount} ${ing.unit || ""}`,
      };
    });
  }, [servings]);

  console.log("tableDatatableData", tableData);

  return (
    <div className="w-full text-primary p-2 flex flex-col gap-2 bg-background">
      <img
        src={drink.imageUrl || "/placeholder.svg"}
        className="w-full object-cover"
        style={{ height: `${300}px` }}
      />
      <TextHeader center text={drink.name} />
      <div className="text-muted-foreground">{drink?.description}</div>
      <div className="text-muted-foreground">
        <NumberSlider
          className="my-2 bg-card border-border border-solid border"
          min={1}
          max={10}
          label="Number of servings"
          defaultValue={1}
          onChange={(number: number) => {
            setServings(number);
          }}
        />
        <TableAdvanced
          itemsPerPage={10}
          pagination
          data={tableData}
          columns={ingredientColumns || []}
        ></TableAdvanced>
      </div>
    </div>
  );
}
