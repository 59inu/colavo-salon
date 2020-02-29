import React from "react";
import ItemList from "../renderList/selector/ItemList";
import DiscountList from "../renderList/selector/DiscountList";
import {
  Data,
  CartData,
  SetCart,
  ModeType,
  SetItem,
  SetDiscount
} from "../../types";
interface IProps {
  readonly data: Data;
  readonly cart: CartData;
  setCart: SetCart;
  delItem: SetItem;
  delDiscount: SetDiscount;
}
interface IState {
  mode: ModeType;
}

class Selector extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      mode: "items"
    };
    this.changeMode = this.changeMode.bind(this);
  }

  changeMode(e: any) {
    this.setState({ mode: e.target });
  }

  render() {
    const { mode } = this.state;
    const { changeMode } = this;
    const { items, discounts } = this.props.data;
    const { cart, delItem, delDiscount, setCart } = this.props;
    return (
      <section>
        <SelectorModeBtn handleClick={changeMode} />
        {mode === "items" ? (
          <ItemList
            items={items}
            cart={cart}
            setCart={setCart}
            delItem={delItem}
          />
        ) : (
          <DiscountList
            discounts={discounts}
            cart={cart}
            delDiscount={delDiscount}
          />
        )}
      </section>
    );
  }
}

export default Selector;
