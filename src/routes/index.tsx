import { FlexibleCard } from "@/components/ui/flexible-card";
import { createFileRoute } from "@tanstack/react-router";
import { List, Wine } from "lucide-react";
import "../App.css";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="App dark bg-background">
      <div className="flex gap-4  flex-wrap p-2">
        {drinks.map((drink, index) => (
          <FlexibleCard
            className="w-full md:w-80"
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
    </div>
  );
}

const drinks: Drink[] = [
  {
    name: "Margarita",
    description:
      "A classic tangy cocktail blending tequila with orange liqueur and fresh lime juice, served with a salted rim.",
    ingredients: [
      { name: "Tequila", category: "Spirit", amount: "50 ml" },
      { name: "Triple Sec", category: "Liqueur", amount: "20 ml" },
      { name: "Lime Juice", category: "Fruit", amount: "30 ml" },
      { name: "Salt", category: "Other", amount: "1 g" },
    ],
    imageUrl:
      "https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&w=600",
    alcohol: 30,
  },
  {
    name: "Mojito",
    description:
      "A refreshing Cuban highball made with white rum, fresh mint, lime juice, sugar, and soda water.",
    ingredients: [
      { name: "White Rum", category: "Spirit", amount: "40 ml" },
      { name: "Mint Leaves", category: "Herb", amount: "8 leaves" },
      { name: "Lime Juice", category: "Fruit", amount: "30 ml" },
      { name: "Sugar", category: "Other", amount: "10 g" },
      { name: "Soda Water", category: "Mixer", amount: "100 ml" },
    ],
    imageUrl:
      "https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&w=600",
    alcohol: 10,
  },
  {
    name: "Old Fashioned",
    description:
      "The original cocktail: bourbon or rye stirred with sugar and bitters, garnished with orange and cherry.",
    ingredients: [
      { name: "Bourbon", category: "Spirit", amount: "60 ml" },
      { name: "Sugar Cube", category: "Other", amount: "5 g" },
      { name: "Angostura Bitters", category: "Other", amount: "2 dashes" },
      { name: "Orange Peel", category: "Fruit", amount: "1 twist" },
      { name: "Maraschino Cherry", category: "Fruit", amount: "1" },
    ],
    imageUrl:
      "https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&w=600",
    alcohol: 32,
  },
  {
    name: "Martini",
    description:
      "A sleek, stirred cocktail of gin and dry vermouth, served chilled with an olive or lemon twist.",
    ingredients: [
      { name: "Gin", category: "Spirit", amount: "60 ml" },
      { name: "Dry Vermouth", category: "Liqueur", amount: "10 ml" },
      { name: "Olive", category: "Other", amount: "1" },
    ],
    imageUrl:
      "https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&w=600",
    alcohol: 38,
  },
  {
    name: "Manhattan",
    description:
      "A robust mix of rye whiskey, sweet vermouth, and bitters, garnished with a cherry.",
    ingredients: [
      { name: "Rye Whiskey", category: "Spirit", amount: "50 ml" },
      { name: "Sweet Vermouth", category: "Liqueur", amount: "20 ml" },
      { name: "Angostura Bitters", category: "Other", amount: "2 dashes" },
      { name: "Maraschino Cherry", category: "Fruit", amount: "1" },
    ],
    imageUrl:
      "https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&w=600",
    alcohol: 35,
  },
  {
    name: "Negroni",
    description:
      "An Italian aperitivo combining gin, Campari, and sweet vermouth in equal parts.",
    ingredients: [
      { name: "Gin", category: "Spirit", amount: "30 ml" },
      { name: "Campari", category: "Liqueur", amount: "30 ml" },
      { name: "Sweet Vermouth", category: "Liqueur", amount: "30 ml" },
    ],
    imageUrl:
      "https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&w=600",
    alcohol: 24,
  },
  {
    name: "Piña Colada",
    description:
      "A creamy tropical blend of rum, pineapple juice, and coconut cream, served frozen or shaken.",
    ingredients: [
      { name: "White Rum", category: "Spirit", amount: "60 ml" },
      { name: "Pineapple Juice", category: "Fruit", amount: "90 ml" },
      { name: "Coconut Cream", category: "Other", amount: "60 ml" },
    ],
    imageUrl:
      "https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&w=600",
    alcohol: 13,
  },
  {
    name: "Bloody Mary",
    description:
      "A savory brunch staple mixing vodka with tomato juice, spices, and savory garnishes.",
    ingredients: [
      { name: "Vodka", category: "Spirit", amount: "45 ml" },
      { name: "Tomato Juice", category: "Mixer", amount: "90 ml" },
      { name: "Worcestershire Sauce", category: "Other", amount: "10 ml" },
      { name: "Hot Sauce", category: "Other", amount: "10 ml" },
      { name: "Celery", category: "Herb", amount: "1 stalk" },
    ],
    imageUrl:
      "https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&w=600",
    alcohol: 10,
  },
  {
    name: "Cosmopolitan",
    description:
      "A modern pink cocktail of vodka, cranberry, triple sec, and lime, served in a martini glass.",
    ingredients: [
      { name: "Vodka", category: "Spirit", amount: "45 ml" },
      { name: "Triple Sec", category: "Liqueur", amount: "15 ml" },
      { name: "Cranberry Juice", category: "Mixer", amount: "30 ml" },
      { name: "Lime Juice", category: "Fruit", amount: "15 ml" },
    ],
    imageUrl:
      "https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&w=600",
    alcohol: 25,
  },
  {
    name: "Daiquiri",
    description:
      "A simple, shaken mix of rum, lime juice, and sugar, served straight up.",
    ingredients: [
      { name: "White Rum", category: "Spirit", amount: "45 ml" },
      { name: "Lime Juice", category: "Fruit", amount: "25 ml" },
      { name: "Simple Syrup", category: "Other", amount: "15 ml" },
    ],
    imageUrl:
      "https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&w=600",
    alcohol: 20,
  },
  {
    name: "Whiskey Sour",
    description:
      "A balanced sour cocktail with whiskey, lemon juice, and sugar, often topped with foam.",
    ingredients: [
      { name: "Bourbon", category: "Spirit", amount: "45 ml" },
      { name: "Lemon Juice", category: "Fruit", amount: "30 ml" },
      { name: "Simple Syrup", category: "Other", amount: "15 ml" },
      { name: "Egg White", category: "Other", amount: "30 ml" },
    ],
    imageUrl:
      "https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&w=600",
    alcohol: 18,
  },
  {
    name: "Moscow Mule",
    description:
      "Vodka, ginger beer, and lime served in a copper mug for a spicy, fizzy drink.",
    ingredients: [
      { name: "Vodka", category: "Spirit", amount: "50 ml" },
      { name: "Ginger Beer", category: "Mixer", amount: "120 ml" },
      { name: "Lime Juice", category: "Fruit", amount: "15 ml" },
    ],
    imageUrl:
      "https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&w=600",
    alcohol: 14,
  },
  {
    name: "Tequila Sunrise",
    description:
      "A visually stunning mix of tequila, orange juice, and grenadine, resembling a sunrise.",
    ingredients: [
      { name: "Tequila", category: "Spirit", amount: "45 ml" },
      { name: "Orange Juice", category: "Fruit", amount: "90 ml" },
      { name: "Grenadine", category: "Other", amount: "15 ml" },
    ],
    imageUrl:
      "https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&w=600",
    alcohol: 17,
  },
  {
    name: "Mai Tai",
    description:
      "A Polynesian-style rum cocktail with orange curaçao, lime juice, and orgeat syrup.",
    ingredients: [
      { name: "White Rum", category: "Spirit", amount: "30 ml" },
      { name: "Dark Rum", category: "Spirit", amount: "30 ml" },
      { name: "Orange Curaçao", category: "Liqueur", amount: "15 ml" },
      { name: "Lime Juice", category: "Fruit", amount: "30 ml" },
      { name: "Orgeat Syrup", category: "Other", amount: "15 ml" },
    ],
    imageUrl:
      "https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&w=600",
    alcohol: 30,
  },
  {
    name: "Sidecar",
    description:
      "A tangy blend of cognac, orange liqueur, and lemon juice, served chilled with a sugared rim.",
    ingredients: [
      { name: "Cognac", category: "Spirit", amount: "50 ml" },
      { name: "Cointreau", category: "Liqueur", amount: "20 ml" },
      { name: "Lemon Juice", category: "Fruit", amount: "20 ml" },
      { name: "Sugar", category: "Other", amount: "5 g" },
    ],
    imageUrl:
      "https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&w=600",
    alcohol: 29,
  },
  {
    name: "Sazerac",
    description:
      "A New Orleans classic of rye whiskey or cognac, bitters, sugar, and absinthe rinse.",
    ingredients: [
      { name: "Rye Whiskey", category: "Spirit", amount: "50 ml" },
      { name: "Absinthe", category: "Liqueur", amount: "5 ml" },
      { name: "Sugar Cube", category: "Other", amount: "5 g" },
      { name: "Peychaud's Bitters", category: "Other", amount: "2 dashes" },
    ],
    imageUrl:
      "https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&w=600",
    alcohol: 40,
  },
  {
    name: "Gimlet",
    description:
      "A crisp, tart cocktail of gin and lime cordial, served straight up.",
    ingredients: [
      { name: "Gin", category: "Spirit", amount: "60 ml" },
      { name: "Rose's Lime Cordial", category: "Other", amount: "15 ml" },
    ],
    imageUrl:
      "https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&w=600",
    alcohol: 37,
  },
  {
    name: "Rum Punch",
    description:
      "A fruity party punch of rum, tropical juices, and bitters, served over ice.",
    ingredients: [
      { name: "Dark Rum", category: "Spirit", amount: "30 ml" },
      { name: "Pineapple Juice", category: "Fruit", amount: "30 ml" },
      { name: "Orange Juice", category: "Fruit", amount: "30 ml" },
      { name: "Angostura Bitters", category: "Other", amount: "2 dashes" },
    ],
    imageUrl:
      "https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&w=600",
    alcohol: 20,
  },
  {
    name: "French 75",
    description:
      "A celebratory combination of gin, lemon juice, sugar, and Champagne.",
    ingredients: [
      { name: "Gin", category: "Spirit", amount: "30 ml" },
      { name: "Lemon Juice", category: "Fruit", amount: "15 ml" },
      { name: "Simple Syrup", category: "Other", amount: "10 ml" },
      { name: "Champagne", category: "Mixer", amount: "60 ml" },
    ],
    imageUrl:
      "https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&w=600",
    alcohol: 20,
  },
  {
    name: "Aperol Spritz",
    description:
      "An Italian aperitivo of Aperol, prosecco, and soda, bright and bittersweet.",
    ingredients: [
      { name: "Aperol", category: "Liqueur", amount: "40 ml" },
      { name: "Prosecco", category: "Mixer", amount: "60 ml" },
      { name: "Soda Water", category: "Mixer", amount: "20 ml" },
    ],
    imageUrl:
      "https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&w=600",
    alcohol: 11,
  },
];

type Drink = {
  name: string;
  description: string;
  ingredients: Ingredient[];
  imageUrl: string;
  alcohol: number;
};

type Ingredient = {
  name: string;
  category?: string;
  amount?: string;
};
