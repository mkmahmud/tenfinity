// src/data/menus.ts

export const menus = [
  {
    label: "Home",
    path: "/",
    icon: "Home",
    iconPosition: "left",
  },
  {
    label: "Shop",
    path: "/shop",
    icon: "Store",
    iconPosition: "left",

  },
  {
    label: "Collections",
    path: "/collections",
    icon: "Layers",
    iconPosition: "left",
    dropDown: [
      {
        label: "Winter Collection",
        path: "/collections/winter",
        icon: "Snowflake",
      },
      {
        label: "Summer Collection",
        path: "/collections/summer",
        icon: "Sun",
      },
      {
        label: "Festive Collection",
        path: "/collections/festive",
        icon: "Firework",
      },
    ],
  },

  {
    label: "About Us",
    path: "/about-us",
    icon: "Info",
    iconPosition: "left",
  },
  {
    label: "Contact",
    path: "/contact",
    iconPosition: "right",
  },
];
