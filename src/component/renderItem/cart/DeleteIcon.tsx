import React from "react";
import { SetItem, SetDiscount, Discount, Item } from "../../../types";
import { CloseOutlined } from "@ant-design/icons";

interface IProps {
  item?: Item;
  discount?: Discount;
  delItem?: SetItem;
  delDiscount?: SetDiscount;
}
export default function DeleteIcon(props: IProps) {
  const { item, discount, delItem, delDiscount } = props;
  return (
    <button
      style={{ backgroundColor: "transparent", border: "none" }}
      onClick={() => {
        if (item && delItem) {
          delItem(item);
        } else if (discount && delDiscount) {
          delDiscount(discount);
        }
      }}
    >
      <CloseOutlined />
    </button>
  );
}
