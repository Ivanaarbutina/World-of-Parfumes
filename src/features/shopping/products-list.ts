import blueGold from "./../../assets/blue-cap-gold-top.jpg";
import black from "./../../assets/black-fragrance.jpg";
import purple from "./../../assets/bote-de-perfume.jpg";
import romantic from "./../../assets/bottle-designed.jpg";
import clear from "./../../assets/clear-glass.jpg";
import purpleGold from "./../../assets/front-view-purple-silver-bottle-designed-beautiful-isolated-white-desk.jpg";
import flower from "./../../assets/front-view-women-perfume-colored-flowers-dark-blue.jpg";
import gold from "./../../assets/gold-cap-parfume.jpg";
import star from "./../../assets/icons8-star-48.png";
import halfStar from "./../../assets/icons8-star-half-empty-48.png";

export type ProductsType = {
  img: string;
  name: string;
  type: string;
  icon: string[];
  price: number;
};

export const productsList: ProductsType[] = [
  {
    img: blueGold,
    name: "Forest dream",
    type: "eau de parfum for women",
    icon: [star, star, star, star, halfStar],
    price: 69,
  },
  {
    img: black,
    name: "Magic night",
    type: "eau de parfum for women",
    icon: [star, star, star, star, star],
    price: 79,
  },
  {
    img: purple,
    name: "Happiness",
    type: "eau de parfum for women",
    icon: [star, star, star, star, halfStar],
    price: 55,
  },
  {
    img: romantic,
    name: "Buterfly",
    type: "eau de parfum for women",
    icon: [star, star, star, star, halfStar],
    price: 80,
  },
  {
    img: clear,
    name: "Simple music",
    type: "eau de parfum for women",
    icon: [star, star, star, star, halfStar],
    price: 82,
  },
  {
    img: purpleGold,
    name: "Poison",
    type: "eau de parfum for women",
    icon: [star, star, star, star, halfStar],
    price: 92,
  },
  {
    img: flower,
    name: "Summer",
    type: "eau de parfum for women",
    icon: [star, star, star, star, halfStar],
    price: 95,
  },
  {
    img: gold,
    name: "Golden girl",
    type: "eau de parfum for women",
    icon: [star, star, star, star, halfStar],
    price: 73,
  },
];
