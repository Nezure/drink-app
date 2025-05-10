import { drinkQueryOptions } from "@/api/queryOptions/drinksQueryOptions";
import { Page } from "@/components/Page";
import { Button } from "@/components/ui/button";
import { ButtonRadioGroup } from "@/components/ui/button-radio-group";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Cuboid, Minus, Plus, PlusCircle } from "lucide-react";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/drinks/$drinkId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { drinkId } = Route.useParams();
  const { data: drink } = useSuspenseQuery(drinkQueryOptions(drinkId));
  const [servings, setServings] = useState<number>(1);
  const navigate = Route.useNavigate();

  const [checkedInstructions, setCheckedInstructions] = useState<number[]>([]);

  const toggleInstruction = (order: number) => {
    setCheckedInstructions(
      (prev) =>
        prev.includes(order)
          ? prev.filter((o) => o !== order) // remove if already checked
          : [...prev, order] // add if not yet checked
    );
  };

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
      className="w-full text-secondary-foreground flex flex-col flex-wrap gap-4 "
      header={drink.name}
    >
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 flex-col p-2 bg-card flex-wrap rounded-md">
          <img
            src={drink.imageUrl || "/placeholder.svg"}
            className="object-cover"
          />
        </div>
        <div className="flex gap-4 text-sm text-muted-foreground  rounded-md">
          <Button
            variant={"default"}
            onClick={() => {
              navigate({
                to: "/drinks/create/$drinkId",
                params: { drinkId: drink.id },
              });
            }}
          >
            <PlusCircle /> Create spin-off!
          </Button>
        </div>
        <div className="flex flex-col text-sm border border-border text-muted-foreground bg-card p-4 rounded-md">
          <span className="text-secondary-foreground text-lg font-semibold">
            Description
          </span>
          <span className="">{drink?.description}</span>
        </div>

        <div className="text-muted-foreground flex flex-col gap-4 ">
          <div className="gap-4 grid md:grid-cols-2 grid-cols-1">
            <div className="w-full bg-card border rounded-md border-border  p-4 flex flex-col gap-2">
              <div className="flex flex-col gap-4 justify-between relative">
                <span className="text-secondary-foreground text-lg font-semibold">
                  Ingredients
                </span>
                <div className="flex gap-8 text-secondary-foreground">
                  <div className="text-xs font-semibold flex items-center gap-2 absolute top-0 right-0">
                    <ButtonRadioGroup
                      className="gap-0 border border-border rounded-md"
                      defaultValue="Metric"
                      options={[
                        { value: "Metric", label: "Metric" },
                        { value: "US", label: "US" },
                        { value: "UK", label: "UK" },
                      ]}
                    />
                  </div>
                  <div className="flex items-end gap-1">
                    <div>
                      <span className="text-xs text-muted-foreground">
                        Servings
                      </span>
                      <div className="flex border border-border rounded-md">
                        <Button
                          size={"icon"}
                          variant={"ghost"}
                          className="rounded-r-none"
                          disabled={servings === 0}
                          onClick={() => setServings(servings - 1)}
                        >
                          <Minus />
                        </Button>
                        <span className="text-center flex text-accent-foreground">
                          <span className="w-9 text-base border-border border h-9 items-center justify-center flex">
                            {servings}
                          </span>
                        </span>
                        <Button
                          size={"icon"}
                          variant={"ghost"}
                          className="rounded-l-none border-l-0"
                          disabled={servings === 99}
                          onClick={() => setServings(servings + 1)}
                        >
                          <Plus />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 bg-muted">
                  {tableData.map((x) => {
                    return (
                      <div className="grid grid-cols-2 items-center gap-2 text-sm">
                        <div className="flex gap-2 items-center">
                          <Cuboid />
                          <span>{x.name}</span>
                        </div>
                        <span>{x.amount}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="bg-card w-full flex flex-col gap-4 p-4 border-border border rounded-md border-solid">
              <span className="text-lg font-semibold text-secondary-foreground">
                Instructions
              </span>
              <div className="flex flex-col gap-2 text-sm text-secondary-foreground">
                {drink.instructionSteps.map((x) => {
                  const isChecked = checkedInstructions.find(
                    (c) => c === x.order
                  );
                  return (
                    <div key={x.order} className="flex gap-2">
                      <div
                        onClick={() => toggleInstruction(x.order)}
                        className={`hover:bg-success/50 cursor-pointer rounded-md border select-none border-solid border-border w-[26px] h-[26px] flex items-center justify-center p-2 ${isChecked && "text-success-foreground bg-success"}`}
                      >
                        <span>{x.order}</span>
                      </div>
                      <div
                        className={` ${isChecked && "line-through text-muted-foreground"}`}
                      >
                        {x.text}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
