import * as React from "react";

interface SelectorModeBtnProps {
  handleClick: (e: any) => void;
}
const SelectorModeBtn = ({ handleClick }: SelectorModeBtnProps) => {
  return (
    <div className="selector-mode__container">
      <button id="items" className="selector-mode items" onClick={handleClick}>
        시술
      </button>
      <button
        id="discounts"
        className="selector-mode discounts"
        onClick={handleClick}
      >
        할인
      </button>
    </div>
  );
};

export default SelectorModeBtn;
