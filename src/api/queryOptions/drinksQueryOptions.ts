import { queryOptions } from "@tanstack/react-query";
import { fetchDrink, fetchDrinks } from "../dummy/drinks";
import drinksKeys from "../queryKeys/drinkQueryKeys";

export function drinksQueryOptions() {
  return queryOptions({
    queryKey: drinksKeys.lists(),
    queryFn: async () => {
      return await fetchDrinks();
    },
  });
}

export function drinkQueryOptions(drinkId: string) {
  return queryOptions({
    queryKey: drinksKeys.detail(drinkId),
    queryFn: async () => {
      return await fetchDrink(drinkId);
    },
  });
}
