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
      "Rub a lime wedge around the rim of a chilled cocktail glass and dip the rim in salt.",
      "Add tequila, lime juice, and triple sec into a shaker filled with ice.",
      "Shake vigorously for 10–15 seconds.",
      "Strain into the prepared glass over fresh ice or serve straight up.",
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
      "Place the sugar cube in an Old Fashioned glass and saturate with bitters.",
      "Add a few drops of water and muddle until the sugar is dissolved.",
      "Fill the glass with a large ice cube, pour the whiskey over, and gently stir to combine.",
      "Express the oil of an orange peel over the glass, then drop in as garnish.",
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
      "Muddle mint leaves with simple syrup and lime juice in a glass.",
      "Fill the glass with ice and pour in the rum.",
      "Top with soda water and gently stir.",
      "Garnish with a sprig of mint.",
    ],
  },
  {
    id: "d2c1e3b4-7807-4d2e-9fab-5f5f3bc473ba",
    name: "Martini",
    description:
      "A timeless cocktail of gin and vermouth, garnished with a lemon twist or olive.",
    ingredients: [
      { name: "Gin", category: "Spirit", amount: "2.5", unit: "oz" },
      {
        name: "Dry vermouth",
        category: "Fortified wine",
        amount: "0.5",
        unit: "oz",
      },
      { name: "Lemon twist or olive", category: "Garnish", amount: "1" },
    ],
    imageUrl:
      "https://www.thecocktaildb.com/images/media/drink/71t8581504353095.jpg",
    alcohol: 36,
    instructionSteps: [
      "Stir gin and vermouth with ice in a mixing glass.",
      "Strain into a chilled martini glass.",
      "Garnish with a lemon twist or an olive.",
    ],
  },
  {
    id: "cde34589-ab12-4cde-9931-7acd518a9ef4",
    name: "Daiquiri",
    description: "A simple yet elegant blend of rum, lime juice, and sugar.",
    ingredients: [
      { name: "White rum", category: "Spirit", amount: "2", unit: "oz" },
      { name: "Fresh lime juice", category: "Juice", amount: "1", unit: "oz" },
      {
        name: "Simple syrup",
        category: "Sweetener",
        amount: "0.75",
        unit: "oz",
      },
    ],
    imageUrl:
      "https://www.thecocktaildb.com/images/media/drink/mrz9091589574515.jpg",
    alcohol: 20,
    instructionSteps: [
      "Add rum, lime juice, and simple syrup to a shaker with ice.",
      "Shake well until chilled.",
      "Strain into a chilled cocktail glass.",
    ],
  },
  {
    id: "a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d",
    name: "Manhattan",
    description: "A rich, warming mix of whiskey, vermouth, and bitters.",
    ingredients: [
      { name: "Rye whiskey", category: "Spirit", amount: "2", unit: "oz" },
      {
        name: "Sweet vermouth",
        category: "Fortified wine",
        amount: "1",
        unit: "oz",
      },
      {
        name: "Angostura bitters",
        category: "Bitters",
        amount: "2",
        unit: "dashes",
      },
      { name: "Maraschino cherry", category: "Garnish", amount: "1" },
    ],
    imageUrl:
      "https://www.thecocktaildb.com/images/media/drink/yt9i1e1624346784.jpg",
    alcohol: 28,
    instructionSteps: [
      "Stir whiskey, vermouth, and bitters with ice in a mixing glass.",
      "Strain into a chilled coupe glass.",
      "Garnish with a maraschino cherry.",
    ],
  },
  {
    id: "b7e23ec2-47f7-4c04-b2a3-4185308f5182",
    name: "Negroni",
    description:
      "An Italian aperitivo of equal parts gin, Campari, and sweet vermouth.",
    ingredients: [
      { name: "Gin", category: "Spirit", amount: "1", unit: "oz" },
      { name: "Campari", category: "Liqueur", amount: "1", unit: "oz" },
      {
        name: "Sweet vermouth",
        category: "Fortified wine",
        amount: "1",
        unit: "oz",
      },
      { name: "Orange twist", category: "Garnish", amount: "1" },
    ],
    imageUrl:
      "https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg",
    alcohol: 24,
    instructionSteps: [
      "Stir gin, Campari, and sweet vermouth with ice.",
      "Strain into an Old Fashioned glass over ice.",
      "Garnish with an orange twist.",
    ],
  },
  {
    id: "f64d6f58-5b7b-4a5f-bcde-8d8ef890d37c",
    name: "Whiskey Sour",
    description:
      "A balanced sour of whiskey, lemon, and sugar, often with a foamy top.",
    ingredients: [
      { name: "Bourbon", category: "Spirit", amount: "2", unit: "oz" },
      {
        name: "Fresh lemon juice",
        category: "Juice",
        amount: "0.75",
        unit: "oz",
      },
      {
        name: "Simple syrup",
        category: "Sweetener",
        amount: "0.75",
        unit: "oz",
      },
      { name: "Egg white", category: "Optional", amount: "1" },
      {
        name: "Angostura bitters",
        category: "Bitters",
        amount: "2",
        unit: "dashes",
      },
    ],
    imageUrl:
      "https://www.thecocktaildb.com/images/media/drink/hbkfsh1589574990.jpg",
    alcohol: 22,
    instructionSteps: [
      "Dry shake (no ice) all ingredients except bitters to emulsify egg white.",
      "Add ice and shake again until chilled.",
      "Strain into a rocks glass over ice.",
      "Top with a few drops of bitters.",
    ],
  },
  {
    id: "e4a1fff0-d0af-4bfa-b383-4bcf736656d3",
    name: "Moscow Mule",
    description: "A fizzy, ginger-forward cocktail served in a copper mug.",
    ingredients: [
      { name: "Vodka", category: "Spirit", amount: "2", unit: "oz" },
      {
        name: "Fresh lime juice",
        category: "Juice",
        amount: "0.5",
        unit: "oz",
      },
      { name: "Ginger beer", category: "Mixer", amount: "Top" },
      { name: "Lime wedge", category: "Garnish", amount: "1" },
      { name: "Ice", amount: "As needed" },
    ],
    imageUrl:
      "https://www.thecocktaildb.com/images/media/drink/3pylqc1504370988.jpg",
    alcohol: 16,
    instructionSteps: [
      "Fill a copper mug with ice.",
      "Add vodka and lime juice.",
      "Top with ginger beer and gently stir.",
      "Garnish with a lime wedge.",
    ],
  },
  {
    id: "aa57321b-1c4e-41fa-b156-8bd6a179cf0f",
    name: "Pina Colada",
    description: "A creamy, tropical blend of rum, coconut, and pineapple.",
    ingredients: [
      { name: "White rum", category: "Spirit", amount: "2", unit: "oz" },
      { name: "Coconut cream", category: "Cream", amount: "1.5", unit: "oz" },
      { name: "Pineapple juice", category: "Juice", amount: "1.5", unit: "oz" },
      { name: "Pineapple wedge", category: "Garnish", amount: "1" },
      { name: "Maraschino cherry", category: "Garnish", amount: "1" },
      { name: "Ice", amount: "1 cup" },
    ],
    imageUrl:
      "https://www.thecocktaildb.com/images/media/drink/cpf4j51504371346.jpg",
    alcohol: 13,
    instructionSteps: [
      "Combine all ingredients in a blender with ice.",
      "Blend until smooth.",
      "Pour into a hurricane glass and garnish.",
    ],
  },
  {
    id: "d4cb1cf7-6c08-4eaa-a8f7-2c9a7f3f6b5d",
    name: "Cosmopolitan",
    description: "A stylish vodka cocktail with cranberry and citrus notes.",
    ingredients: [
      { name: "Vodka", category: "Spirit", amount: "1.5", unit: "oz" },
      {
        name: "Triple sec (Cointreau)",
        category: "Liqueur",
        amount: "1",
        unit: "oz",
      },
      {
        name: "Fresh lime juice",
        category: "Juice",
        amount: "0.5",
        unit: "oz",
      },
      { name: "Cranberry juice", category: "Juice", amount: "0.5", unit: "oz" },
    ],
    imageUrl:
      "https://www.thecocktaildb.com/images/media/drink/kpsajh1504368362.jpg",
    alcohol: 20,
    instructionSteps: [
      "Add all ingredients to a shaker with ice.",
      "Shake well and strain into a chilled martini glass.",
      "Garnish with a lime wheel or twist.",
    ],
  },
  {
    id: "89a12d43-7f03-4d5b-8100-6fa4be097a1c",
    name: "Bloody Mary",
    description: "A savory brunch favorite with vodka, tomato, and spice.",
    ingredients: [
      { name: "Vodka", category: "Spirit", amount: "1.5", unit: "oz" },
      { name: "Tomato juice", category: "Juice", amount: "3", unit: "oz" },
      { name: "Lemon juice", category: "Juice", amount: "0.5", unit: "oz" },
      {
        name: "Worcestershire sauce",
        category: "Flavoring",
        amount: "2",
        unit: "dashes",
      },
      { name: "Tabasco", category: "Flavoring", amount: "2", unit: "dashes" },
      { name: "Salt & pepper", category: "Seasoning", amount: "To taste" },
      { name: "Celery stalk", category: "Garnish", amount: "1" },
    ],
    imageUrl:
      "https://www.thecocktaildb.com/images/media/drink/t6caa21582485702.jpg",
    alcohol: 10,
    instructionSteps: [
      "Combine all ingredients in a shaker with ice.",
      "Roll (don’t shake) gently to mix.",
      "Strain into a glass over fresh ice.",
      "Garnish with a celery stalk and lemon wedge.",
    ],
  },
  {
    id: "7f9e2d18-5711-4a73-8f36-4cdb7a14e6a5",
    name: "Gimlet",
    description: "A tart and simple cocktail of gin and lime.",
    ingredients: [
      { name: "Gin", category: "Spirit", amount: "2", unit: "oz" },
      {
        name: "Fresh lime juice",
        category: "Juice",
        amount: "0.75",
        unit: "oz",
      },
      {
        name: "Simple syrup",
        category: "Sweetener",
        amount: "0.75",
        unit: "oz",
      },
    ],
    imageUrl:
      "https://www.thecocktaildb.com/images/media/drink/3a83526846048895.jpg",
    alcohol: 24,
    instructionSteps: [
      "Add all ingredients to a shaker with ice.",
      "Shake until well chilled.",
      "Strain into a chilled coupe.",
    ],
  },
  {
    id: "01b2e3f4-5678-4a9b-8a1c-2d3e4f5a6b7c",
    name: "Sidecar",
    description: "A classic cognac cocktail with orange and lemon.",
    ingredients: [
      { name: "Cognac", category: "Spirit", amount: "2", unit: "oz" },
      {
        name: "Triple sec (Cointreau)",
        category: "Liqueur",
        amount: "1",
        unit: "oz",
      },
      {
        name: "Fresh lemon juice",
        category: "Juice",
        amount: "0.75",
        unit: "oz",
      },
    ],
    imageUrl:
      "https://www.thecocktaildb.com/images/media/drink/9asl561561958253.jpg",
    alcohol: 27,
    instructionSteps: [
      "Rub the rim of a chilled glass with lemon and dip in sugar (optional).",
      "Shake all ingredients with ice.",
      "Strain into the prepared glass.",
    ],
  },
  {
    id: "11223344-5566-7788-99aa-bbccddeeff00",
    name: "Mai Tai",
    description: "A tropical tiki drink with rum, orgeat, and citrus.",
    ingredients: [
      { name: "White rum", category: "Spirit", amount: "1", unit: "oz" },
      { name: "Dark rum", category: "Spirit", amount: "1", unit: "oz" },
      {
        name: "Orange curaçao",
        category: "Liqueur",
        amount: "0.5",
        unit: "oz",
      },
      {
        name: "Orgeat syrup",
        category: "Sweetener",
        amount: "0.5",
        unit: "oz",
      },
      {
        name: "Fresh lime juice",
        category: "Juice",
        amount: "0.5",
        unit: "oz",
      },
    ],
    imageUrl:
      "https://www.thecocktaildb.com/images/media/drink/qvxwvt1468876415.jpg",
    alcohol: 22,
    instructionSteps: [
      "Shake all ingredients with ice.",
      "Strain into a glass with fresh ice.",
      "Float dark rum on top and garnish with mint and lime.",
    ],
  },
  {
    id: "cafebabe-0000-0000-0000-deafbeef0000",
    name: "Paloma",
    description: "A bright Mexican highball with grapefruit soda and tequila.",
    ingredients: [
      { name: "Tequila", category: "Spirit", amount: "2", unit: "oz" },
      { name: "Grapefruit soda", category: "Mixer", amount: "4", unit: "oz" },
      {
        name: "Fresh lime juice",
        category: "Juice",
        amount: "0.5",
        unit: "oz",
      },
      { name: "Salt", category: "Garnish", amount: "For rim" },
      { name: "Ice", amount: "As needed" },
    ],
    imageUrl:
      "https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg",
    alcohol: 12,
    instructionSteps: [
      "Rub the rim of a glass with lime and dip in salt.",
      "Fill the glass with ice and add tequila and lime juice.",
      "Top with grapefruit soda and stir gently.",
    ],
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174000",
    name: "French 75",
    description: "A bubbly and elegant mix of gin, lemon, and Champagne.",
    ingredients: [
      { name: "Gin", category: "Spirit", amount: "1", unit: "oz" },
      {
        name: "Fresh lemon juice",
        category: "Juice",
        amount: "0.5",
        unit: "oz",
      },
      {
        name: "Simple syrup",
        category: "Sweetener",
        amount: "0.5",
        unit: "oz",
      },
      { name: "Champagne", category: "Sparkling wine", amount: "Top" },
    ],
    imageUrl:
      "https://www.thecocktaildb.com/images/media/drink/6wf7gv1503564696.jpg",
    alcohol: 24,
    instructionSteps: [
      "Shake gin, lemon juice, and simple syrup with ice.",
      "Strain into a flute and top with Champagne.",
      "Garnish with a lemon twist.",
    ],
  },
  {
    id: "abcdef01-2345-6789-abcd-ef0123456789",
    name: "Sazerac",
    description:
      "A potent New Orleans classic with rye, bitters, and absinthe.",
    ingredients: [
      { name: "Rye whiskey", category: "Spirit", amount: "2", unit: "oz" },
      { name: "Sugar cube", category: "Sweetener", amount: "1" },
      {
        name: "Peychaud’s bitters",
        category: "Bitters",
        amount: "3",
        unit: "dashes",
      },
      { name: "Absinthe", category: "Liqueur", amount: "To rinse" },
      { name: "Lemon peel", category: "Garnish", amount: "1" },
    ],
    imageUrl:
      "https://www.thecocktaildb.com/images/media/drink/vvpxwy1439902092.jpg",
    alcohol: 36,
    instructionSteps: [
      "Rinse a chilled glass with absinthe and discard excess.",
      "Muddle sugar and bitters with a few drops of water.",
      "Add rye, stir with ice, and strain into the prepared glass.",
      "Express lemon peel over the drink and garnish.",
    ],
  },
  {
    id: "deadbeef-dead-beef-dead-beefdeadbeef",
    name: "Dark 'n' Stormy",
    description: "A simple, spicy mix of dark rum and ginger beer.",
    ingredients: [
      { name: "Dark rum", category: "Spirit", amount: "2", unit: "oz" },
      { name: "Ginger beer", category: "Mixer", amount: "4", unit: "oz" },
      { name: "Lime wedge", category: "Garnish", amount: "1" },
      { name: "Ice", amount: "As needed" },
    ],
    imageUrl:
      "https://www.thecocktaildb.com/images/media/drink/xwxwqs1461867097.jpg",
    alcohol: 22,
    instructionSteps: [
      "Fill a glass with ice.",
      "Pour in dark rum and top with ginger beer.",
      "Garnish with a lime wedge.",
    ],
  },
  {
    id: "feedface-bead-cafe-b00b-facefeedface",
    name: "Mint Julep",
    description:
      "The refreshing Kentucky Derby cocktail of bourbon, mint, and sugar.",
    ingredients: [
      { name: "Bourbon", category: "Spirit", amount: "2", unit: "oz" },
      {
        name: "Simple syrup",
        category: "Sweetener",
        amount: "0.5",
        unit: "oz",
      },
      { name: "Mint leaves", category: "Herb", amount: "6", unit: "" },
      { name: "Crushed ice", amount: "As needed" },
    ],
    imageUrl:
      "https://www.thecocktaildb.com/images/media/drink/squyyq1439907312.jpg",
    alcohol: 30,
    instructionSteps: [
      "Muddle mint leaves with simple syrup in a julep cup.",
      "Fill the cup with crushed ice and pour bourbon over.",
      "Stir until the cup is frosty and garnish with a mint sprig.",
    ],
  },
  {
    id: "ba5eba11-dead-4bee-ad98-efd0cafe1234",
    name: "Aperol Spritz",
    description:
      "A light, effervescent Italian aperitivo with bittersweet Aperol.",
    ingredients: [
      { name: "Aperol", category: "Aperitivo", amount: "3", unit: "oz" },
      { name: "Prosecco", category: "Sparkling wine", amount: "2", unit: "oz" },
      { name: "Soda water", category: "Mixer", amount: "Splash" },
      { name: "Orange slice", category: "Garnish", amount: "1" },
    ],
    imageUrl:
      "https://www.thecocktaildb.com/images/media/drink/3z6xdi1589574603.jpg",
    alcohol: 11,
    instructionSteps: [
      "Fill a wine glass with ice.",
      "Add Aperol and Prosecco, then a splash of soda water.",
      "Gently stir and garnish with an orange slice.",
    ],
  },
  {
    id: "c0ffee00-cafe-babe-cafe-0000feedface",
    name: "Caipirinha",
    description: "Brazil’s national cocktail of cachaça, lime, and sugar.",
    ingredients: [
      { name: "Cachaça", category: "Spirit", amount: "2", unit: "oz" },
      { name: "Lime", category: "Fruit", amount: "1", unit: "quartered" },
      { name: "Sugar", category: "Sweetener", amount: "2", unit: "tsp" },
      { name: "Ice", amount: "As needed" },
    ],
    imageUrl:
      "https://www.thecocktaildb.com/images/media/drink/jgvn7p1582484435.jpg",
    alcohol: 20,
    instructionSteps: [
      "Muddle lime quarters with sugar in a glass.",
      "Fill with ice and add cachaça.",
      "Stir well.",
    ],
  },
  {
    id: "0ddf00d-0000-0000-c0de-000000000000",
    name: "Tom Collins",
    description: "A tall, fizzy gin cocktail with lemon and sugar.",
    ingredients: [
      { name: "Gin", category: "Spirit", amount: "2", unit: "oz" },
      { name: "Fresh lemon juice", category: "Juice", amount: "1", unit: "oz" },
      {
        name: "Simple syrup",
        category: "Sweetener",
        amount: "0.5",
        unit: "oz",
      },
      { name: "Soda water", category: "Mixer", amount: "Top" },
      { name: "Lemon wheel", category: "Garnish", amount: "1" },
      { name: "Maraschino cherry", category: "Garnish", amount: "1" },
    ],
    imageUrl:
      "https://www.thecocktaildb.com/images/media/drink/7cll921606854636.jpg",
    alcohol: 16,
    instructionSteps: [
      "Shake gin, lemon juice, and simple syrup with ice.",
      "Strain into a Collins glass filled with ice.",
      "Top with soda water and garnish.",
    ],
  },
  {
    id: "abcdefab-cdef-abcd-efab-cdefabcdefab",
    name: "Boulevardier",
    description:
      "A whiskey twist on the Negroni with sweet vermouth and Campari.",
    ingredients: [
      {
        name: "Bourbon or rye whiskey",
        category: "Spirit",
        amount: "1",
        unit: "oz",
      },
      { name: "Campari", category: "Liqueur", amount: "1", unit: "oz" },
      {
        name: "Sweet vermouth",
        category: "Fortified wine",
        amount: "1",
        unit: "oz",
      },
      { name: "Orange twist", category: "Garnish", amount: "1" },
    ],
    imageUrl:
      "https://www.thecocktaildb.com/images/media/drink/mpka7d1582476355.jpg",
    alcohol: 24,
    instructionSteps: [
      "Stir all ingredients with ice.",
      "Strain into a chilled glass over ice.",
      "Garnish with an orange twist.",
    ],
  },
  {
    id: "12345678-9abc-def0-1234-56789abcdef0",
    name: "Irish Coffee",
    description: "A warm combination of coffee, Irish whiskey, and cream.",
    ingredients: [
      { name: "Irish whiskey", category: "Spirit", amount: "1.5", unit: "oz" },
      { name: "Hot brewed coffee", category: "Mixer", amount: "4", unit: "oz" },
      { name: "Brown sugar", category: "Sweetener", amount: "1", unit: "tsp" },
      { name: "Lightly whipped cream", category: "Cream", amount: "Top" },
    ],
    imageUrl:
      "https://www.thecocktaildb.com/images/media/drink/syvswp1442415103.jpg",
    alcohol: 11,
    instructionSteps: [
      "Dissolve brown sugar in hot coffee in a warmed glass.",
      "Add Irish whiskey and stir gently.",
      "Float cream on top by pouring over the back of a spoon.",
    ],
  },
  {
    id: "0b0b0b0b-1c1c-2d2d-3e3e-4f4f5a5a6a6a",
    name: "Pisco Sour",
    description: "A frothy Peruvian cocktail of pisco, lime, and bitters.",
    ingredients: [
      { name: "Pisco", category: "Spirit", amount: "2", unit: "oz" },
      { name: "Fresh lime juice", category: "Juice", amount: "1", unit: "oz" },
      {
        name: "Simple syrup",
        category: "Sweetener",
        amount: "0.75",
        unit: "oz",
      },
      { name: "Egg white", category: "Foam", amount: "1" },
      {
        name: "Angostura bitters",
        category: "Bitters",
        amount: "2",
        unit: "dashes",
      },
    ],
    imageUrl:
      "https://www.thecocktaildb.com/images/media/drink/abcpwr1504817739.jpg",
    alcohol: 20,
    instructionSteps: [
      "Dry shake pisco, lime juice, simple syrup, and egg white.",
      "Add ice and shake until chilled.",
      "Strain into a glass and garnish with bitters drops.",
    ],
  },
  {
    id: "11235813-2121-3141-5161-7181-9202021222",
    name: "Espresso Martini",
    description: "A modern classic of vodka, coffee liqueur, and espresso.",
    ingredients: [
      { name: "Vodka", category: "Spirit", amount: "1.5", unit: "oz" },
      {
        name: "Coffee liqueur (Kahlúa)",
        category: "Liqueur",
        amount: "1",
        unit: "oz",
      },
      { name: "Fresh espresso", category: "Coffee", amount: "1", unit: "oz" },
      {
        name: "Simple syrup",
        category: "Sweetener",
        amount: "0.25",
        unit: "oz",
      },
    ],
    imageUrl:
      "https://www.thecocktaildb.com/images/media/drink/pstqps1478257072.jpg",
    alcohol: 22,
    instructionSteps: [
      "Add all ingredients to a shaker with ice.",
      "Shake vigorously and strain into a chilled martini glass.",
      "Garnish with a few coffee beans.",
    ],
  },
  {
    id: "31415926-5358-9793-2384-626433832795",
    name: "Long Island Iced Tea",
    description:
      "A potent blend of multiple spirits balanced with citrus and cola.",
    ingredients: [
      { name: "Vodka", category: "Spirit", amount: "0.5", unit: "oz" },
      { name: "Tequila", category: "Spirit", amount: "0.5", unit: "oz" },
      { name: "White rum", category: "Spirit", amount: "0.5", unit: "oz" },
      { name: "Gin", category: "Spirit", amount: "0.5", unit: "oz" },
      { name: "Triple sec", category: "Liqueur", amount: "0.5", unit: "oz" },
      { name: "Fresh lemon juice", category: "Juice", amount: "1", unit: "oz" },
      {
        name: "Simple syrup",
        category: "Sweetener",
        amount: "0.5",
        unit: "oz",
      },
      { name: "Cola", category: "Mixer", amount: "Top" },
    ],
    imageUrl:
      "https://www.thecocktaildb.com/images/media/drink/wx7hsg1504370510.jpg",
    alcohol: 22,
    instructionSteps: [
      "Combine all spirits, lemon juice, and simple syrup in a shaker with ice.",
      "Shake lightly and strain into a highball glass filled with ice.",
      "Top with cola and garnish with a lemon wedge.",
    ],
  },
  {
    id: "27182818-2845-9045-2353-238256765789",
    name: "Bellini",
    description:
      "A light, fruity Venetian cocktail of peach purée and Prosecco.",
    ingredients: [
      { name: "Peach purée", category: "Fruit", amount: "1", unit: "oz" },
      { name: "Prosecco", category: "Sparkling wine", amount: "3", unit: "oz" },
    ],
    imageUrl:
      "https://www.thecocktaildb.com/images/media/drink/apneom1504370294.jpg",
    alcohol: 11,
    instructionSteps: [
      "Pour peach purée into a chilled flute.",
      "Slowly top with Prosecco and stir gently.",
    ],
  },
  {
    id: "16180339-7533-7690-2889-899171847223",
    name: "Vesper Martini",
    description:
      "A sharp, James Bond–inspired martini of gin, vodka, and Lillet Blanc.",
    ingredients: [
      { name: "Gin", category: "Spirit", amount: "3", unit: "oz" },
      { name: "Vodka", category: "Spirit", amount: "1", unit: "oz" },
      { name: "Lillet Blanc", category: "Apertif", amount: "0.5", unit: "oz" },
      { name: "Lemon twist", category: "Garnish", amount: "1" },
    ],
    imageUrl:
      "https://www.thecocktaildb.com/images/media/drink/kvvd4z1504817403.jpg",
    alcohol: 35,
    instructionSteps: [
      "Shake gin, vodka, and Lillet Blanc with ice.",
      "Strain into a chilled martini glass.",
      "Garnish with a lemon twist.",
    ],
  },
];
