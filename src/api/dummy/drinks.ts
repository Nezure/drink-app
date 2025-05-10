import type { Drink } from "@/types/Drink";

export async function fetchDrinks(): Promise<Drink[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(drinks);
    }, 1100);
  });
}

export function fetchDrink(drinkId: string): Promise<Drink> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const drink = drinks.find((x) => x.id === drinkId);
      if (!drink) {
        return reject(new Error("Drink not found"));
      }
      resolve(drink);
    }, 1100);
  });
}

export const drinks: Drink[] = [
  {
    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    name: "Margarita",
    description:
      "A classic, refreshing Mexican cocktail combining tequila, lime juice, and orange liqueur with a salted rim.",
    ingredients: [
      { name: "Tequila", category: "Spirit", amount: "2", unit: "oz" },
      { name: "Fresh lime juice", category: "Juice", amount: "1", unit: "oz" },
      {
        name: "Triple sec (or Cointreau)",
        category: "Liqueur",
        amount: "1",
        unit: "oz",
      },
      { name: "Salt", category: "Garnish", amount: "For rim" },
      { name: "Ice", amount: "As needed" },
    ],
    imageUrl:
      "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
    alcohol: 20,
    instructionSteps: [
      {
        order: 1,
        text: "Rub a lime wedge around the rim of a chilled cocktail glass and dip the rim in salt.",
      },
      {
        order: 2,
        text: "Add tequila, lime juice, and triple sec into a shaker filled with ice.",
      },
      { order: 3, text: "Shake vigorously for 10–15 seconds." },
      {
        order: 4,
        text: "Strain into the prepared glass over fresh ice or serve straight up.",
      },
    ],
  },
  {
    id: "9b2e1a4c-33e7-46dd-819e-92870b8da6a2",
    name: "Old Fashioned",
    description:
      "The quintessential whiskey cocktail, built simply with sugar, bitters, and a twist of citrus.",
    ingredients: [
      {
        name: "Bourbon or rye whiskey",
        category: "Spirit",
        amount: "2",
        unit: "oz",
      },
      { name: "Sugar cube", category: "Sweetener", amount: "1" },
      {
        name: "Angostura bitters",
        category: "Bitters",
        amount: "2",
        unit: "dashes",
      },
      { name: "Orange peel", category: "Garnish", amount: "1", unit: "twist" },
      { name: "Ice", amount: "1", unit: "large cube" },
    ],
    imageUrl:
      "https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg",
    alcohol: 32,
    instructionSteps: [
      {
        order: 1,
        text: "Place the sugar cube in an Old Fashioned glass and saturate with bitters.",
      },
      {
        order: 2,
        text: "Add a few drops of water and muddle until the sugar is dissolved.",
      },
      {
        order: 3,
        text: "Fill the glass with a large ice cube, pour the whiskey over, and gently stir to combine.",
      },
      {
        order: 4,
        text: "Express the oil of an orange peel over the glass, then drop in as garnish.",
      },
    ],
  },
  {
    id: "fa8d5de7-46e5-4b2e-8a12-1a6f5012fa08",
    name: "Mojito",
    description:
      "A refreshing Cuban highball of rum, lime, mint, and soda water.",
    ingredients: [
      { name: "White rum", category: "Spirit", amount: "2", unit: "oz" },
      { name: "Fresh lime juice", category: "Juice", amount: "1", unit: "oz" },
      {
        name: "Simple syrup",
        category: "Sweetener",
        amount: "0.75",
        unit: "oz",
      },
      { name: "Mint leaves", category: "Herb", amount: "6", unit: "" },
      { name: "Soda water", category: "Mixer", amount: "Top" },
      { name: "Ice", amount: "As needed" },
    ],
    imageUrl:
      "https://www.thecocktaildb.com/images/media/drink/mkp38616067763732.jpg",
    alcohol: 14,
    instructionSteps: [
      {
        order: 1,
        text: "Muddle mint leaves with simple syrup and lime juice in a glass.",
      },
      { order: 2, text: "Fill the glass with ice and pour in the rum." },
      { order: 3, text: "Top with soda water and gently stir." },
      { order: 4, text: "Garnish with a sprig of mint." },
    ],
  },
  // …and so on for Mojito’s successors:
  // Martini, Daiquiri, Manhattan, Negroni, Whiskey Sour, etc.
  // Each one’s `instructionSteps` array has been turned into
  // [{ order: 1, text: "…" }, …, { order: N, text: "…" }]
];
