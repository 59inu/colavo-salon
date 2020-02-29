import React from "react";
import DiscountCard from "../../renderItem/cart/DiscountCard";
import { Discount, SetCart, CartData, SetDiscount } from "../../../types";

interface IProps {
  discounts: Discount;
  setCart: SetCart;
  cart: CartData;
  delDiscount: SetDiscount;
}

export default function ItemList({
  discounts,
  setCart,
  cart,
  delDiscount
}: IProps) {
  const changeTarget = (targets: Array<string>, discount: Discount) => {
    const discountKey = Object.keys(discount)[0];
    const currentDC = { ...cart.discounts };
    currentDC[discountKey].target = targets;
    const newCart = { ...cart, discounts: currentDC };
    setCart(newCart);
  };

  const renderArray = Object.keys(discounts).map(key => ({
    [key]: discounts[key]
  }));

  return (
    <div className="cart__discount-section">
      {renderArray.map((discount, i) => (
        <DiscountCard
          key={i}
          cart={cart}
          discount={discount}
          delCart={delDiscount}
          changeTarget={changeTarget}
        />
      ))}
    </div>
  );
}
