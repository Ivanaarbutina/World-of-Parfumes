import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  text: string;
  color?: "blue" | "green" | "red";
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
