import React from "react";
import DiscountList from "../renderList/cart/DiscountList";
import ItemList from "../renderList/cart/ItemList";
import { CartData, DelItem } from "../../types/index";
import { Divider } from "antd";

interface Iprops {
  cart: CartData;
  delItem: DelItem;
}
export default function Cart({ cart }: Iprops) {
  const { items, discounts } = cart;

  const totalItemsPrice = Object.keys(items).reduce(
    (sumPrice: number, key: string): number => {
      const item = items[key];
      const itemTotalPrice = item.count * item.price;
      return sumPrice + itemTotalPrice;
    },
    0
  );

  const totalDiscounts = Object.keys(discounts).reduce(
    (sumDC: number, key: string): number => {
      const discount = discounts[key];
      const target = discount.target;
      if (target !== undefined) {
        if (target.length === 0) {
          //no specific targets, discount all
          const curDCPrice = totalItemsPrice * discount.rate;
          return sumDC + curDCPrice;
        } else {
          //specific targets
          const targetPrices = target.reduce((sum: number, itemKey: string) => {
            const currentTargetPrice =
              cart.items[itemKey].price * cart.items[itemKey].count;
            return sum + currentTargetPrice;
          }, 0);
          const curDCPrice = targetPrices * discount.rate;
          return sumDC + curDCPrice;
        }
      } else {
        // exceptional
        return 0;
      }
    },
    0
  );

  const getTotalPrice = () => {
    return (totalItemsPrice - totalDiscounts).toLocaleString();
  };

  return (
    <section className="cart__container">
      BILL
      <Divider />
      <ItemList items={items} cart={cart} />
      <Divider />
      <DiscountList discounts={discounts} cart={cart} />
      <Divider />
      <TotalPrice totalPrice={getTotalPrice()} />
    </section>
  );
}
