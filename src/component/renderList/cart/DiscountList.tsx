import React from "react";
import DiscountCard from "../../renderItem/cart/DiscountCard";
import { Discount, CartData } from "../../../types";

interface IProps {
  discounts: Discount;
  cart: CartData;
  delDiscount: any;
}

export default function ItemList({ discounts, cart, delDiscount }: IProps) {
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
        />
      ))}
    </div>
  );
}
