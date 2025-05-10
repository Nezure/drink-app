import { Home, PlusCircle } from "lucide-react";

// Menu items.
export const menuItems: MenuItem[] = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Create drink",
    url: "/drinks/create",
    icon: PlusCircle,
  },
];

export type MenuItem = {
  title: string;
  url: string;
  icon: any;
  subMenuItem?: MenuItem;
};
