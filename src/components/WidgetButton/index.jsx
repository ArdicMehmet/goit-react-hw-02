import React from "react";
import styles from "./widgetButton.module.css";
const WidgetButton = ({ name, handleClick }) => {
  return (
    <button className={`${styles.btn} lato`} onClick={(_) => handleClick(name)}>
      {name}
    </button>
  );
};

export default WidgetButton;
