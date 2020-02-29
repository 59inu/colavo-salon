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
