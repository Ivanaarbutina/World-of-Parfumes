import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  text: string;
  color?: "yellow" | "black" | "yellow2";
  size?: "lg" | "md" | "sm";
  onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ text, color, size, ...props }: ButtonProps) => {
  return (
    <div>
      <button className={`btn btn--${color} btn--${size}  `} {...props}>
        {text}
      </button>
    </div>
  );
};

export default Button;
