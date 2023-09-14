import Button from "../../components/button";
import { iconsList } from "./socials-list";

const Socials = () => {
  return (
    <div className="socials">
      <div className="socials__link">
        <Button
          size="md"
          color="red"
          text="Subscribe"
          className="socials__btn"
        ></Button>
        <span>to the newsletter</span>
      </div>
      <div className="socials__icon__wrapper">
        {iconsList.map((icon) => {
          return (
            <div key={icon.name} className="socials__icon">
              <img src={icon.img} className="socials__icon__img" />
              <span className="socials__icon__name">{icon.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Socials;
