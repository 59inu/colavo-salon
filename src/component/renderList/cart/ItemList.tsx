import React from "react";
import { Item, CartData, DelItem } from "../../../types";
import ItemCard from "../../renderItem/cart/ItemCard";

interface IProps {
  items: Item;
  cart: CartData;
  delItem: DelItem;
}
export default function ItemList({ items, delItem }: IProps) {
  const renderArray = Object.keys(items).map(key => ({ [key]: items[key] }));

  return (
    <div className="cart__item-section">
      {renderArray.map((item: Item, i: number) => (
        <ItemCard key={i} item={item} delCart={delItem} />
      ))}
    </div>
  );
}
