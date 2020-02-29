import * as React from "react";
import CheckIcon from "../../buttons/CheckIcon";
import { Item, CartData } from "../../../types";

interface ItemProps {
  cart: CartData;
  item: Item;
  addCart: any;
}
export default function ItemCard({ cart, item, addCart }: ItemProps) {
  const itemKey = Object.keys(item)[0];
  const { name, price } = item[itemKey];
  const localePrice = Number(price).toLocaleString();
  const handleClick = () => {
    if (addCart) {
      addCart(item);
    }
  };
  const isChecked = () => itemKey in cart.items;
  return (
    <li>
      <div className="selector__render-item-container" onClick={handleClick}>
        <div className="selector__render-item-section left">
          <div>{name}</div>
          <div>₩ {localePrice}</div>
        </div>
        <div className="selector__render-item-section right">
          <CheckIcon checked={isChecked()} />
        </div>
      </div>
    </li>
  );
}
