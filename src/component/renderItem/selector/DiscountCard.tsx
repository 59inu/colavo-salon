import * as React from "react";
import CheckIcon from "../../buttons/CheckIcon";
import { Discount, SetDiscount, CartData } from "../../../types/index";

interface DiscountCardProps {
  discount: Discount;
  addCart: SetDiscount;
  delDiscount: SetDiscount;
  cart: CartData;
}
export default function DiscountCard({
  discount,
  addCart,
  delDiscount,
  cart
}: DiscountCardProps) {
  const discountKey = Object.keys(discount)[0];
  const { name, rate } = discount[discountKey];
  const discountPercent = Math.floor(rate * 100);
  const handleClick = () => {
    if (discountKey in cart.discounts) {
      delDiscount(discount);
    } else {
      addCart(discount);
    }
  };
  const isChecked = () => discountKey in cart.discounts;
  return (
    <li>
      <div className="selector__render-item-container" onClick={handleClick}>
        <div className="selector__render-item-section left">
          <div>{name}</div>
          <div>{discountPercent}%</div>
        </div>
        <div className="selector__render-item-section right">
          <CheckIcon checked={isChecked()} />
        </div>
      </div>
    </li>
  );
}
