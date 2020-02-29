import React from "react";
import DiscountCard from "../../renderItem/selector/DiscountCard";
import { Discount } from "../../../types";

interface IProps {
  discounts: Discount;
}
export default function ItemList({ discounts }: IProps) {
  const renderArray = Object.keys(discounts).map(key => ({
    [key]: discounts[key]
  }));

  return (
    <div className="selector__render-list-container">
      {renderArray.map((discount, i) => (
        <DiscountCard key={i} discount={discount} />
      ))}
    </div>
  );
}
