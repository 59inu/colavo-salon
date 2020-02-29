import React from "react";
import DiscountList from "../renderList/cart/DiscountList";
import ItemList from "../renderList/cart/ItemList";
import TotalPrice from "../TotalPrice";
import { CartData, SetItem, SetDiscount } from "../../types/index";
import { Divider } from "antd";

interface Iprops {
  cart: CartData;
  setCart: (newCart: CartData) => void;
  delItem: SetItem;
  delDiscount: SetDiscount;
}
export default function Cart({ cart, setCart, delItem, delDiscount }: Iprops) {
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

  const getLocalePrice = (price: number | string) => price.toLocaleString();

  return (
    <section className="cart__container">
      BILL
      <Divider />
      <ItemList items={items} setCart={setCart} cart={cart} delItem={delItem} />
      <Divider />
      <DiscountList
        discounts={discounts}
        setCart={setCart}
        cart={cart}
        delDiscount={delDiscount}
      />
      <Divider />
      <TotalPrice
        totalPrice={getLocalePrice(getTotalPrice())}
        totalItemsPrice={getLocalePrice(totalItemsPrice)}
        totalDiscountsPrice={getLocalePrice(totalDiscounts)}
      />
    </section>
  );
}
