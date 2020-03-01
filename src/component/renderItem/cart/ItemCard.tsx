import React from "react";
import DeleteIBtn from "../../buttons/DeleteIBtn";
import { Item, SetItem, ChangeAmount } from "../../../types";
import { InputNumber } from "antd";
import { priceFormatter } from "../../../function/contentFormat";

interface IProps {
  item: Item;
  delCart: SetItem;
  changeAmount: ChangeAmount;
  currency: string;
}

export default function ItemCart({
  item,
  delCart,
  changeAmount,
  currency
}: IProps) {
  const key = Object.keys(item)[0];
  const { price, name, count } = item[key];
  const itemPrice = price;
  const totalPrice = price * count;

  const handelonChange = (value: number | undefined) => {
    changeAmount(value, item);
  };

  const formatter = (price: number) => {
    return priceFormatter(currency, price);
  };
  return (
    <li>
      <div className="cart-item-box__container">
        <div className="cart-discount-card__title">
          <div>
            <div>{name}</div>
            <div>({formatter(itemPrice)})</div>
          </div>
          <div>{formatter(totalPrice)}</div>
        </div>
        <div>
          <InputNumber
            min={1}
            max={10}
            defaultValue={1}
            onChange={handelonChange}
          />
          <DeleteIBtn item={item} delItem={delCart} />
        </div>
      </div>
    </li>
  );
}
