import React from "react";
import { Item } from "../../../types";
import ItemCard from "../../renderItems/selector/ItemCard";

interface IProps {
  items: Item;
}
export default function ItemList({ items }: IProps) {
  const renderArray = Object.keys(items).map(key => ({ [key]: items[key] }));
  return (
    <div className="selector__render-list-container">
      {renderArray.map((item: Item, i: number) => (
        <ItemCard key={i} item={item} />
      ))}
    </div>
  );
}
