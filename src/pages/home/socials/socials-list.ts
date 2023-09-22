import facebook from "./../../../assets/icons/icons8-facebook.svg";
import instagram from "./../../../assets/icons/icons8-instagram.svg";
import pinterest from "./../../../assets/icons/icons8-pinterest.svg";
import twitter from "./../../../assets/icons/icons8-twitter-circled.svg";
import tiktok from "./../../../assets/icons/icons8-tiktok.svg";

export type IconProps = {
  img: string;
  name: string;
};

export const iconsList: IconProps[] = [
  {
    img: facebook,
    name: "Facebook",
  },
  {
    img: pinterest,
    name: "Pinterest",
  },
  {
    img: instagram,
    name: "Instagram",
  },
  {
    img: tiktok,
    name: "Tik-tok",
  },
  {
    img: twitter,
    name: "Twitter",
  },
];
