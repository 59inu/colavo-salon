import React, { useEffect, ReactElement, useState } from "react";
import { Select } from "antd";
import { ChangeTarget, Discount, Item } from "../../../types";
const { Option } = Select;

interface IProps {
  targets: Item;
  handleChange: ChangeTarget;
  discount: Discount;
}
export default function({ targets, handleChange, discount }: IProps) {
  const targetsKeys = Object.keys(targets);
  const discountKey = Object.keys(discount)[0];
  const [discountTargets, setTargets] = useState<Array<ReactElement>>([]);

  const updateTargets = () => {
    const newTargets: Array<ReactElement> = [];
    for (let i = 0; i < targetsKeys.length; i++) {
      const itemKey = targetsKeys[i];
      const item = targets[itemKey];
      const [itemName, itemCount] = [item.name, item.count];
      newTargets.push(
        <Option key={itemKey}>{`${itemName} * ${itemCount}`}</Option>
      );
    }
    setTargets(newTargets);
  };
  useEffect(updateTargets, []);
  useEffect(updateTargets, [targets]);

  return (
    <Select
      key={discountKey}
      mode="multiple"
      style={{ width: "100%" }}
      placeholder={"일괄 적용"}
      onChange={(itemKeys: Array<string>) => {
        handleChange(itemKeys, discount);
      }}
    >
      {discountTargets}
    </Select>
  );
}
