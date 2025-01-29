import React from "react";
import Navbar from "/src/Components-Common/Navbar";
import CartItems from "/src/routes/cart/components/CartItems";

const Cart = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar index={4} className="flex-none" />
      <div className="flex justify-center flex-1 overflow-scroll">
        <CartItems />
      </div>
    </div>
  );
};

export default Cart;
