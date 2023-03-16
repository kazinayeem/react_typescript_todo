import React from "react";

type Props = {
  title: string;
  color: string;
  action: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
const Button = (props: Props) => {
  return (
    <button className={`btn btn-${props.color}`} onClick={props.action}>
      {props.title}
    </button>
  );
};

export default Button;
