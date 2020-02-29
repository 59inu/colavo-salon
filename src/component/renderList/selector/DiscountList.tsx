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
  const renderArray = Object.keys(discounts).map(key => ({
    [key]: discounts[key]
  }));

  return (
    <div className="selector__render-list-container">
      {renderArray.map((discount, i) => (
        <DiscountCard
          key={i}
          discount={discount}
          delDiscount={delDiscount}
          cart={cart}
        />
      ))}
    </div>
  );
}
