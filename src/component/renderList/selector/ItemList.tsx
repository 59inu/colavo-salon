import React from "react";
import { Item, SetCart, CartData, SetItem } from "../../../types";
import ItemCard from "../../renderItem/selector/ItemCard";

interface IProps {
  items: Item;
  setCart: SetCart;
  cart: CartData;
  delItem: SetItem;
  currency: string;
}
export default function ItemList({
  items,
  setCart,
  cart,
  delItem,
  currency
}: IProps) {
  const addItem = (item: Item) => {
    const newItems = { ...cart.items, ...item };
    const newCart = { ...cart, items: newItems };
    setCart(newCart);
  };

  const renderArray = Object.keys(items).map(key => ({ [key]: items[key] }));
  return (
    <div className="selector__render-list-container">
      {renderArray.map((item: Item, i: number) => (
        <ItemCard
          key={i}
          cart={cart}
          item={item}
          addCart={addItem}
          delItem={delItem}
          currency={currency}
        />
      ))}
    </div>
  );
}
