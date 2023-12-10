import React from "react";

//Since this component only needs to show a Count of Shoping cart Items so it should only have the count not the actual Cart Items.
interface Props {
  cartItemsCount: number;
}

const Navbar = ({ cartItemsCount }: Props) => {
  return <div>Navbar: {cartItemsCount}</div>;
};

export default Navbar;
