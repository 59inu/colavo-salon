import React from "react";
import DiscountCard from "../../renderItem/selector/DiscountCard";
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
  const addDiscount = (discount: Discount) => {
    const key = Object.keys(discount)[0];
    const discountTarget: string[] = [];
    const newDC = { ...discount };
    newDC[key].target = discountTarget;
    const newCartDCs = { ...cart.discounts, ...newDC };
    const newCart = { ...cart, discounts: newCartDCs };
    setCart(newCart);
  };

  const renderArray = Object.keys(discounts).map(key => ({
    [key]: discounts[key]
  }));

  return (
    <div className="selector__render-list-container">
      {renderArray.map((discount, i) => (
        <DiscountCard
          key={i}
          discount={discount}
          addCart={addDiscount}
          delDiscount={delDiscount}
          cart={cart}
        />
      ))}
    </div>
  );
}
