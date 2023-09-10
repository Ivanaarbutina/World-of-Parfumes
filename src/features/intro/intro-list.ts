import parfume1 from "./../../assets/black-fragrance.jpg";
import parfume2 from "./../../assets/bottle-designed.jpg";
import parfume3 from "./../../assets/clear-glass.jpg";
import parfume4 from "./../../assets/front-view-purple-silver-bottle-designed-beautiful-isolated-white-desk.jpg";

export type ParfumeType = {
  title: string;
  desc: string;
  id: number;
  img: string;
};

export const parfumesList: ParfumeType[] = [
  {
    title: "Forest dream",
    desc: "forest-dream",
    id: 1,
    img: parfume1,
  },
  {
    title: "Happiness",
    desc: "forest-dream",
    id: 2,
    img: parfume2,
  },
  {
    title: "Shunshine",
    desc: "forest-dream",
    id: 3,
    img: parfume3,
  },
  {
    title: "Mistique",
    desc: "forest-dream",
    id: 4,
    img: parfume4,
  },
];
