import React, { useState, useEffect } from "react";
import { CheckOutlined } from "@ant-design/icons";

type ClassName = "btn-item-check unClicked" | "btn-item-check clicked";
interface IProps {
  checked: boolean;
}
export default function CheckIcon({ checked }: IProps) {
  const [className, setClassName] = useState<ClassName>(
    "btn-item-check unClicked"
  );
  const classNames: Array<ClassName> = [
    "btn-item-check unClicked",
    "btn-item-check clicked"
  ];
  useEffect(changeClassName, [checked]);
  function changeClassName() {
    const newClass = checked ? classNames[1] : classNames[0];
    setClassName(newClass);
  }

  return (
    <div className={className}>
      <CheckOutlined />
    </div>
  );
}
