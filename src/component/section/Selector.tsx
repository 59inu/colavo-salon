import React from "react";
import ItemList from "../renderList/selector/ItemList";
import DiscountList from "../renderList/selector/DiscountList";
import { Data, CartData, ModeType } from "../../types";

interface IProps {
  readonly data: Data;
  readonly cart: CartData;
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
    const { cart } = this.props;
    return (
      <section>
        <SelectorModeBtn handleClick={changeMode} />
        {mode === "items" ? (
          <ItemList items={items} cart={cart} />
        ) : (
          <DiscountList discounts={discounts} cart={cart} />
        )}
      </section>
    );
  }
}

export default Selector;
