import React from "react";
import "./App.css";
import Selector from "./component/section/Selector";
import Cart from "./component/section/Cart";
import { Data, CartData, Item, Discount } from "./types";
import { message } from "antd";

interface IState {
  data: Data;
  cart: CartData;
}
class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      data: { items: {}, discounts: {}, currency_code: "" },
      cart: { items: {}, discounts: {} }
    };
    this.setCart = this.setCart.bind(this);
    this.delItem = this.delItem.bind(this);
    this.delDiscount = this.delDiscount.bind(this);
  }

  componentDidMount() {
    console.log(
      "W  E  L  C  O  M  E\n\n  T  O\n\n    C  O  L  A  V  O\n\n      G  R  O  U  N  D!"
    );

    const { data } = this.state;
    const apiUrl =
      "https://us-central1-colavolab.cloudfunctions.net/requestAssignmentCalculatorData";

    fetch(apiUrl, { headers: { ACCEPT: "application/json" } })
      .then(response => response.json())
      .then(result => {
        const stateKeys = Object.keys(data);
        const responseKeys = Object.keys(result);
        const isStateKeys = (currentKey: string) => {
          return stateKeys.indexOf(currentKey) > -1;
        };
        if (responseKeys.every(isStateKeys)) {
          this.setState({ data: result });
        }
      })
      .catch(error => {
        const vh = Math.max(
          document.documentElement.clientHeight,
          window.innerHeight || 0
        );
        message.config({
          top: vh * 0.4
        });
        message.warning(
          "데이터를 불러오지 못했습니다.\n 오류가 계속되면 관리자에게 문의해주세요."
        );
      });
  }

  delItem(item: Item) {
    const { cart } = this.state;
    const itemKey = Object.keys(item)[0];
    const newDiscounts = { ...cart.discounts };

    //삭제하려는 아이템을 지정한 할인 정보가 있는지 체크하여, 있을 경우 할인 정보 삭제
    for (let discountKey in newDiscounts) {
      const discountTarget = newDiscounts[discountKey].target;
      const targets = discountTarget ? discountTarget : [];
      if (targets.indexOf(itemKey) > -1) {
        const itemName = this.state.data.items[itemKey].name;
        const discountName = this.state.data.discounts[discountKey].name;
        message.config({ duration: 4 });
        message.info(
          `'${itemName}'이(가) 포함된 할인 '${discountName}'이(가) 삭제됩니다.`
        );
        delete newDiscounts[discountKey];
      }
    }
    const newItems = { ...cart.items };
    delete newItems[itemKey];
    const newCart = { discounts: newDiscounts, items: newItems };
    this.setCart(newCart);
  }

  delDiscount(discount: Discount) {
    const { cart } = this.state;
    const key = Object.keys(discount)[0];
    const currentDC = { ...cart.discounts };
    delete currentDC[key];
    const newCart = { ...cart, discounts: currentDC };
    this.setState({ cart: newCart });
  }

  setCart(newCart: CartData) {
    this.setState({ cart: newCart });
  }

  render() {
    const { setCart, delDiscount, delItem } = this;
    const { data, cart } = this.state;
    return (
      <div className="App">
        <main>
          <Selector
            data={data}
            cart={cart}
            setCart={setCart}
            delItem={delItem}
            delDiscount={delDiscount}
          />
          <Cart cart={cart} delItem={delItem} delDiscount={delDiscount} />
        </main>
      </div>
    );
  }
}

export default App;
