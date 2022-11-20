import React, { memo } from "react";
import plusIcon from "../img/plus-sign.svg";

const AddButton = memo(({ onClickBtn }) => {
  return (
    <div className="add-button" onClick={onClickBtn}>
      <img src={plusIcon} alt="Add Button" />
    </div>
  );
});

export default AddButton;
