import React from "react";
import styles from "./description.module.css";
const Description = ({ title, desc }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{desc}</p>
    </div>
  );
};

export default Description;
