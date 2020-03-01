import React from "react";
import { priceFormatter } from "../function/contentFormat";
interface IProps {
  currency: string;
  totalPrice: number;
  totalItemsPrice: number;
  totalDiscountsPrice: number;
}
export default function TotalPrice({
  currency,
  totalDiscountsPrice,
  totalItemsPrice,
  totalPrice
}: IProps) {
  const formatter = (price: number) => {
    return priceFormatter(currency, price);
  };
  return (
    <div className="cart__total-price-container">
      <div className="cart__total-price">TOTAL : {formatter(totalPrice)} </div>
      <div className="cart__part-price">
        <div>서비스 총액 : {formatter(totalItemsPrice)}</div>
        <div>할인 총액 : {formatter(totalDiscountsPrice)}</div>
      </div>
    </div>
  );
}
