import React from "react";
import DeleteIcon from "./DeleteIBtn";
import { Item, SetItem, ChangeAmount } from "../../../types";
import { InputNumber } from "antd";

interface IProps {
  item: Item;
  delCart: SetItem;
  changeAmount: ChangeAmount;
}

export default function ItemCart({ item, delCart, changeAmount }: IProps) {
  const key = Object.keys(item)[0];
  const { price, name, count } = item[key];
  const itemPrice = price.toLocaleString();
  const totalPrice = (price * count).toLocaleString();
  const handelonChange = (value: number | undefined) => {
    changeAmount(value, item);
  };
  return (
    <li>
      <div className="cart-item-box__container">
        <div className="cart-discount-card__title">
          <div>
            <div>{name}</div>
            <div>(₩ {itemPrice})</div>
          </div>
          <div>₩ {totalPrice}</div>
        </div>
        <div>
          <InputNumber
            min={1}
            max={10}
            defaultValue={1}
            onChange={handelonChange}
          />
          <DeleteIcon item={item} delItem={delCart} />
        </div>
      </div>
    </li>
  );
}
