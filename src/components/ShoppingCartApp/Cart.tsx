import React from "react";

interface Props {
  cartItems: string[];
  onClear: () => void; //since the state is in parent, so it should update the state, so we tell parent with this event to update/cleare the state.
}

const Cart = ({ cartItems, onClear }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={onClear}>Clear</button>
    </>
  );
};

export default Cart;
