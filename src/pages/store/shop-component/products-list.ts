import blueGold from "./../../../assets/bottle-perfume-10.jpg";
import black from "./../../../assets/bottle-perfume-1.jpg";
import purple from "./../../../assets/bottle-perfume-2.jpg";
import romantic from "./../../../assets/bottle-perfume-3.jpg";
import clear from "./../../../assets/bottle-perfume-4.jpg";
import purpleGold from "./../../../assets/bottle-perfume-5.jpg";
import flower from "./../../../assets/bottle-perfume-6.jpg";
import gold from "./../../../assets/bottle-perfume-7.jpg";
import green from "./../../../assets/bottle-perfume-9.jpg";
import amor from "./../../../assets/bottle-perfume-8.jpg";
import beauty from "./../../../assets/bottle-perfume-11.jpg";
import glam from "./../../../assets/bottle-12.jpg";
import star from "./../../../assets/icons8-star-48.png";
import halfStar from "./../../../assets/icons8-star-half-empty-48.png";

export type ProductsType = {
  img: string;
  name: string;
  type: string;
  icon: string[];
  desc: string;
  price: number;
  id: number;
};

export const productsList: ProductsType[] = [
  {
    img: blueGold,
    name: "Forest dream",
    type: "eau de toilette for women - 50ml",
    icon: [star, star, star, star, star],
    desc: "forest-dream",
    price: 69,
    id: 1,
  },
  {
    img: black,
    name: "Magic night",
    type: "eau de parfum for women - 75ml",
    icon: [star, star, star, star, star],
    desc: "sunshine",
    price: 79,
    id: 2,
  },
  {
    img: purple,
    name: "Happiness",
    type: "eau de toilette for women - 50ml",
    icon: [star, star, star, star, star],
    desc: "happiness",
    price: 55,
    id: 3,
  },
  {
    img: romantic,
    name: "Butterfly",
    type: "eau de parfum for women - 75ml",
    icon: [star, star, star, star, halfStar],
    desc: "mistique",
    price: 80,
    id: 4,
  },
  {
    img: clear,
    name: "Ladybug",
    type: "eau de parfum for women - 75ml",
    icon: [star, star, star, star, halfStar],
    desc: "forest-dream",
    price: 82,
    id: 5,
  },
  {
    img: purpleGold,
    name: "Poison",
    type: "eau de parfum for women - 100ml",
    icon: [star, star, star, star, star],
    desc: "happiness",
    price: 92,
    id: 6,
  },
  {
    img: flower,
    name: "Summer",
    type: "eau de parfum for women - 100ml",
    icon: [star, star, star, star, star],
    desc: "sunshine",
    price: 95,
    id: 7,
  },
  {
    img: green,
    name: "Emerald",
    type: "eau de parfum for women - 50ml",
    icon: [star, star, star, star, halfStar],
    desc: "mistique",
    price: 73,
    id: 8,
  },
  {
    img: gold,
    name: "Golden girl",
    type: "eau de parfum for women - 50ml",
    icon: [star, star, star, star, star],
    desc: "forest-dream",
    price: 73,
    id: 9,
  },
  {
    img: amor,
    name: "Amor",
    type: "eau de toilette for women - 50ml",
    icon: [star, star, star, star, halfStar],
    desc: "happiness",
    price: 63,
    id: 10,
  },
  {
    img: beauty,
    name: "Beauty Queen",
    type: "eau de parfum for women - 50ml",
    icon: [star, star, star, star, star],
    desc: "sunshine",
    price: 78,
    id: 11,
  },
  {
    img: glam,
    name: "Glamurous",
    type: "eau de parfum for women - 50ml",
    icon: [star, star, star, star, star],
    desc: "mistique",
    price: 75,
    id: 12,
  },
];
