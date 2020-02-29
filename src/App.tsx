import React from "react";
import "./App.css";
import Selector from "./component/section/Selector";
import Cart from "./component/section/Cart";
import { Data, CartData, Item } from "./types";

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
  }

  componentDidMount() {
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
        //에러핸들링
      });
  }
  delItem(item: Item) {
    const { cart } = this.state;
    const itemKey = Object.keys(item)[0];
    const newDiscounts = { ...cart.discounts };

    const newItems = { ...cart.items };
    delete newItems[itemKey];
    const newCart = { discounts: newDiscounts, items: newItems };
    this.setState({ cart: newCart });
  }

  render() {
    const { data, cart } = this.state;
    return (
      <div className="App">
        <main>
          <Selector data={data} cart={cart} />
          <Cart cart={cart} delItem={delItem} />
        </main>
      </div>
    );
  }
}

export default App;
