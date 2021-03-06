interface ItemVal {
  count: number;
  name: string;
  price: number;
}

interface DiscountVal {
  name: string;
  rate: number;
  target?: string[];
}

export type Item = { [index: string]: ItemVal };
export type Discount = { [index: string]: DiscountVal };

export interface Data {
  items: Item;
  discounts: Discount;
  currency_code: string;
}

export interface CartData {
  items: Item;
  discounts: Discount;
}
export type ModeType = "items" | "discounts";

export type SetCart = (newCart: CartData) => void;
export type SetItem = (item: Item) => void;
export type SetDiscount = (discount: Discount) => void;
export type ChangeAmount = (val: number | undefined, item: Item) => void;
export type ChangeTarget = (targets: Array<string>, discount: Discount) => void;
