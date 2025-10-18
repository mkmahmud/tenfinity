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
    dropDown: [
      {
        label: "All Products",
        path: "/shop",
        icon: "Basket",
      },
      {
        label: "Categories",
        path: "/categories",
        icon: "Grid",
        dropDown: [
          {
            label: "Sarees",
            path: "/shop/sarees",
            icon: "Tshirt",
          },
          {
            label: "Three-Pieces",
            path: "/shop/three-pieces",
            icon: "Dress",
          },
          {
            label: "Two-Pieces",
            path: "/shop/two-pieces",
            icon: "Shirt",
          },
          {
            label: "Accessories",
            path: "/shop/accessories",
            icon: "Necklace",
          },
        ],
      },
      {
        label: "New Arrivals",
        path: "/shop/new-arrivals",
        icon: "Tag",
      },
      {
        label: "On Sale",
        path: "/shop/sale",
        icon: "Discount",
      },
    ],
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
