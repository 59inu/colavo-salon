import React from "react";
import { Item, SetCart, CartData, SetItem } from "../../../types";
import ItemCard from "../../renderItem/cart/ItemCard";

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
  const changeAmount = (val: number | undefined, item: Item) => {
    const key = Object.keys(item)[0];
    const newItems = { ...cart.items };
    newItems[key].count = val ? val : 1;
    const newCart = { ...cart, items: newItems };
    setCart(newCart);
  };

  const renderArray = Object.keys(items).map(key => ({ [key]: items[key] }));

  return (
    <div className="cart__item-section">
      {renderArray.map((item: Item, i: number) => (
        <ItemCard
          key={i}
          item={item}
          delCart={delItem}
          changeAmount={changeAmount}
          currency={currency}
        />
      ))}
    </div>
  );
}
