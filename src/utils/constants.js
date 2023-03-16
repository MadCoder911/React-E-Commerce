import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Our mission is to create a comfortable and inviting living space for our customers, while also offering exceptional customer service and affordable prices",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "We believe that everyone deserves to have a beautiful home, and we strive to make that a reality for our customers",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Box Furniture was founded in 1985 with a vision to provide high-quality furniture to customers. Over the years, the store has grown and expanded its product range, but its commitment to quality has remained unchanged.",
  },
];

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
