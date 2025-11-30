import type IButton from "../../interface/ButtonInterface";

export const Button = ({className, text, onClick}: IButton) => {
  return (
    <>
      <button className={className} onClick={onClick}>{text}</button>
    </>
  );
};
