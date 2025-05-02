export const drinksKeys = {
  all: ["drinks"] as const,

  lists: () => [...drinksKeys.all, "lists"] as const,

  list: (params: { page: number; limit?: number; [key: string]: any }) =>
    [...drinksKeys.lists(), params] as const,

  detail: (id: string) => [...drinksKeys.all, "details", id] as const,

  details: () => [...drinksKeys.all, "details"] as const,
};

export default drinksKeys;
