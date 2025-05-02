import type { Drink } from "@/types/Drink";
import { useRouter } from "@tanstack/react-router";
import { List, Wine } from "lucide-react";
import { FlexibleCard } from "./ui/flexible-card";

export function DrinkCardList({ drinks }: { drinks: Drink[] }) {
  const { navigate } = useRouter();
  return (
    <div className="flex gap-2 p-2  flex-wrap">
      {drinks.map((drink, index) => (
        <FlexibleCard
          className="w-full md:w-80"
          onClick={() => {
            navigate({ to: "/drinks/$drinkId", params: { drinkId: drink.id } });
          }}
          footer={
            <div className="flex flex-wrap gap-2 text-sm">
              {drink.ingredients.map((ingredient) => (
                <div
                  className="rounded-md bg-secondary border-none p-1 px-1"
                  key={ingredient.name}
                >
                  <div className="py-1 px-1">
                    <div className="flex gap-1 items-center">
                      <List size={16} />
                      <div>{ingredient.name}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          }
          title={drink.name}
          icon={<Wine />}
          description={drink.description}
          key={index}
          imageUrl={drink.imageUrl}
        ></FlexibleCard>
      ))}
    </div>
  );
}
