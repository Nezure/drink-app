import { drinkQueryOptions } from "@/api/queryOptions/drinksQueryOptions";
import { Page } from "@/components/Page";
import NumberSlider from "@/components/ui/number-slider";
import TableAdvanced from "@/components/ui/table-advanced";
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

  return (
    <Page
      className="w-full text-primary-foreground flex flex-col flex-wrap gap-4 md:gap-6"
      header={drink.name}
    >
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex gap-4 md:gap-6 flex-col flex-wrap">
          <img
            src={drink.imageUrl || "/placeholder.svg"}
            className="object-cover"
          />
        </div>

        <div className="text-muted-foreground">{drink?.description}</div>
        <div className="text-muted-foreground flex flex-col gap-4 md:gap-6">
          <div>
            <NumberSlider
              className="border-border border-solid border"
              min={1}
              max={10}
              label="Number of servings"
              defaultValue={1}
              onChange={(number: number) => {
                setServings(number);
              }}
            />
          </div>
          <div className="flex gap-4 flex-wrap lg:flex-nowrap md:gap-6">
            <div className="w-full lg:w-1/2">
              <TableAdvanced
                itemsPerPage={10}
                pagination
                data={tableData}
                columns={ingredientColumns || []}
              ></TableAdvanced>
            </div>
            <div className="bg-card w-full lg:w-1/2 flex flex-col gap-2 md:p-4 border-border border rounded-md border-solid p-2">
              <span className="text-primary-foreground text-lg">
                Instructions
              </span>
              <div>
                {drink.instructionSteps.map((x) => (
                  <div key={x.order} className="flex gap-2">
                    <div className="hover:text-primary-foreground cursor-pointer rounded-md border border-solid border-border w-[26px] h-[26px] flex items-center justify-center p-2">
                      {x.order}
                    </div>
                    <div className="text-muted-foreground">{x.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
