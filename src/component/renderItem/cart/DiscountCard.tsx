import React from "react";
import { SetDiscount, Discount, ChangeTarget, CartData } from "../../../types";
import DeleteIBtn from "./DeleteIBtn";
import DiscountTargetSelector from "./DiscountTargetSelector";
import { priceFormatter } from "../../../function/contentFormat";

interface IProps {
  discount: Discount;
  delCart: SetDiscount;
  changeTarget: ChangeTarget;
  cart: CartData;
  currency: string;
}

export default function DiscountCard({
  discount,
  delCart,
  changeTarget,
  cart,
  currency
}: IProps) {
  const [discountKey, discountData] = [
    Object.keys(discount)[0],
    Object.values(discount)[0]
  ];
  const { target, rate, name } = discountData;

  const getDiscountPrice = () => {
    const targetItems = target
      ? target.length
        ? target
        : Object.keys(cart.items)
      : [];
    const TargetTotalPrice = targetItems.reduce(
      (acc: number, itemKey: string) => {
        return acc + cart.items[itemKey].count * cart.items[itemKey].price;
      },
      0
    );
    const discountPrice = Math.floor(TargetTotalPrice * rate);
    return TargetTotalPrice
      ? `- ${priceFormatter(currency, discountPrice)}`
      : null;
  };
  const discountPercent = `${Math.floor(rate * 100)} %`;
  return (
    <li>
      <div className="cart-discount-card__contianer">
        <div className="cart-discount-card__title">
          <div>
            <div>{`${name} ${discountPercent}`}</div>
            <div>{getDiscountPrice()}</div>
          </div>
          <div className="cart__discount-card__del-btn">
            <DeleteIBtn discount={discount} delDiscount={delCart} />
          </div>
        </div>
        <div className="cart__discount-card__target-selector">
          <DiscountTargetSelector
            key={discountKey}
            handleChange={changeTarget}
            targets={cart.items}
            discount={discount}
          />
        </div>
      </div>
    </li>
  );
}
