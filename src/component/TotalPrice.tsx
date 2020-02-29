import React from "react";

interface IProps {
  totalPrice: string;
  totalItemsPrice: string;
  totalDiscountsPrice: string;
}
export default function TotalPrice({
  totalDiscountsPrice,
  totalItemsPrice,
  totalPrice
}: IProps) {
  return (
    <div className="cart__total-price-container">
      <div className="cart__total-price">TOTAL : {totalPrice} 원</div>
      <div className="cart__part-price">
        <div>서비스 총액 : {totalItemsPrice} 원</div>
        <div>할인 총액 : {totalDiscountsPrice} 원</div>
      </div>
    </div>
  );
}
