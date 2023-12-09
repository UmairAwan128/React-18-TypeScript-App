import React from "react";

interface Props {
  //Sort all the Props in Alphbetical Order by Name in the interface for readability.
  children: string;
  //This prop is optional so it will not be required by Component or no Compilation error
  color?: "primary" | "secondary" | "danger"; // This prop only allows these 3 values, any other value will generate a compilation error, this is a validation so invalid class names and Button Design can be avoided

  onClick: () => void;
}

//color prop has defult value "primary"
const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
