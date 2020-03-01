import React, { useEffect, useState } from "react";
import CheckIcon from "../../buttons/CheckIcon";
import { ChangeTarget, Discount, Item } from "../../../types";
import Modal from "./Modal";
interface TargetState {
  [index: string]: boolean;
}
interface IProps {
  targetOps: Item;
  changeTarget: ChangeTarget;
  discount: Discount;
}
export default function DiscountTargetSelector({
  targetOps,
  changeTarget,
  discount
}: IProps) {
  const targetsOpsKeys = Object.keys(targetOps);
  const discountKey = Object.keys(discount)[0];
  const discountData = Object.values(discount)[0];
  const [targets, setTargets] = useState<TargetState>({});

  useEffect(() => {
    const newTargets: TargetState = {};
    targetsOpsKeys.forEach(key => {
      const isSelected = !discountData.target?.every(
        selected => selected !== key
      );
      newTargets[key] = isSelected;
    });
    setTargets(newTargets);
  }, []);

  const [modalOpen, setModal] = useState(false);
  const switchModal = () => {
    setModal(!modalOpen);
  };
  const onClickTargetOps = (targetKey: string) => {
    const isSelected = targets[targetKey];
    const newTargets = { ...targets, [targetKey]: !isSelected };
    setTargets(newTargets);
  };
  const modalChildrenOptions = () => {
    const targetOpsArr = targetsOpsKeys.map(key => targetOps[key]);
    return targetOpsArr.map((item, i) => {
      const targetKey = targetsOpsKeys[i];
      const isSelected = targets[targetKey];
      const className = isSelected
        ? "select-target-option unClicked"
        : "select-target-option clicked";

      return (
        <div key={i}>
          <div>
            {item.name} * {item.count}
          </div>
          <div
            onClick={() => onClickTargetOps(targetKey)}
            className={className}
          >
            <CheckIcon checked={isSelected ? isSelected : false} />
          </div>
        </div>
      );
    });
  };
  const onClose = () => {
    const targetKeys = Object.keys(targets).filter(key => targets[key]);
    changeTarget(targetKeys, discount);
    setModal(false);
  };

  return (
    <div className="cart__discount-card__target-selector">
      <button onClick={switchModal}>수정</button>
      <Modal
        key={discountKey}
        title={discount[discountKey].name}
        isOpen={modalOpen}
        onClose={onClose}
        children={modalChildrenOptions()}
      />
    </div>
  );
}
