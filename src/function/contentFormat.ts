export const priceFormatter = (currency: string, price: number | string) => {
  const priceNumber = Number(price);
  switch (currency) {
    case "KRW":
      const itemPriceKo = priceNumber.toLocaleString("ko");
      return `${itemPriceKo} 원`;
    case "USD":
      const itemPriceUs = priceNumber.toLocaleString("en");
      return `$ ${itemPriceUs}`;
  }
};
