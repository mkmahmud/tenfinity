// src/data/menus.ts

export const menus = [
  {
    label: "Home",
    path: "/",
    icon: "Home",
    iconPosition: "left",
  },
  {
    label: "Products",
    path: "/products",
    icon: "Server",
    iconPosition: "left",
    dropDown: [
      {
        label: "All Products",
        path: "/products",
        icon: "GalleryHorizontal",
      },
      {
        label: "Categories",
        path: "/categories",
        icon: "ChartBarStacked",
        dropDown: [
          {
            label: "Electronics",
            path: "/products/electronics",
            icon: "cpu",
          },
          {
            label: "Fashion",
            path: "/products/fashion",
            icon: "shirt",
          },
          {
            label: "Home & Living",
            path: "/products/home-living",
            icon: "sofa",
          },
        ],
      },
      {
        label: "New Arrivals",
        path: "/products/new",
        icon: "DiamondPlus",
      },
      {
        label: "On Sale",
        path: "/products/sale",
        icon: "CirclePercent",
      },
    ],
  },
  {
    label: "Services",
    path: "/services",
    icon: "HandPlatter",
    iconPosition: "left",
    dropDown: [
      {
        label: "Web Development",
        path: "/services/web-development",
        icon: "ChevronsLeftRightEllipsis",
      },
      {
        label: "Mobile Apps",
        path: "/services/mobile-apps",
        icon: "TabletSmartphone",
      },
      {
        label: "AI Solutions",
        path: "/services/ai",
        icon: "Brain",
      },
      {
        label: "Consulting",
        path: "/services/consulting",
        icon: "MessagesSquare",
      },
    ],
  },
  {
    label: "Company",
    path: "/company",
    icon: "Building2",
    iconPosition: "left",
    dropDown: [
      {
        label: "About Us",
        path: "/about",
        icon: "Store",
      },
      {
        label: "Team",
        path: "/team",
        icon: "ShieldHalf",
      },
      {
        label: "Careers",
        path: "/careers",
        icon: "BriefcaseBusiness",
      },
      {
        label: "Press",
        path: "/press",
        icon: "Megaphone",
      },
    ],
  },
  {
    label: "Resources",
    path: "/resources",
    icon: "WindArrowDown",
    iconPosition: "left",
    dropDown: [
      {
        label: "Blog",
        path: "/blog",
        icon: "Pen",
      },
      {
        label: "Case Studies",
        path: "/case-studies",
        icon: "FileText",
      },
      {
        label: "Documentation",
        path: "/docs",
        icon: "Book",
      },
      {
        label: "Community",
        path: "https://discord.gg/example",
        icon: "MessageCircle",
        isExternal: true,
      },
    ],
  },
  {
    label: "Contact",
    path: "/contact",
    iconPosition: "right",
  },
];
