export const priceFormatter = (currency: string, price: number | string) => {
  switch (currency) {
    case "KRW":
      const itemPriceKo = price.toLocaleString("ko");
      return `${itemPriceKo} 원`;
    case "USD":
      const itemPriceUs = price.toLocaleString("en");
      return `$ ${itemPriceUs}`;
  }
};
