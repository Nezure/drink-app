export type Drink = {
  id: string; // <-- added
  name: string;
  description: string;
  ingredients: Ingredient[];
  imageUrl?: string;
  alcohol: number;
  instructionSteps: InstructionStep[];
};

export type InstructionStep = {
  order: number;
  text: string;
};

export type Ingredient = {
  name: string;
  category?: string;
  amount?: string;
  unit?: string;
};
