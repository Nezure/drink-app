export type Drink = {
  id: string; // <-- added
  name: string;
  description: string;
  ingredients: Ingredient[];
  imageUrl: string;
  alcohol: number;
  instructionSteps: string[];
};

export type Ingredient = {
  name: string;
  category?: string;
  amount?: string;
  unit?: string;
};
