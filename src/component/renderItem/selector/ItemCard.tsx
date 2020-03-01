import * as React from "react";
import CheckIcon from "../../buttons/CheckIcon";
import { Item, SetItem, CartData } from "../../../types";
import { priceFormatter } from "../../../function/contentFormat";

interface ItemProps {
  cart: CartData;
  item: Item;
  addCart: SetItem;
  delItem: SetItem;
  currency: string;
}
export default function ItemCard({ cart, item, addCart, currency }: ItemProps) {
  const itemKey = Object.keys(item)[0];
  const { name, price } = item[itemKey];

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
          <div>{priceFormatter(currency, price)}</div>
        </div>
        <div className="selector__render-item-section right">
          <CheckIcon checked={isChecked()} />
        </div>
      </div>
    </li>
  );
}
