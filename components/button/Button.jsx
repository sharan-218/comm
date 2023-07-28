import React from "react";
import styles from "./page.module.css";
// import Link from "next/link";
const Button = ({ text, br, color, m }) => {
  return (
    <>
      <button
        className={styles.button}
        style={{
          borderRadius: br ? br : "6px",
          color: color ? color : "white",
          margin: m,
        }}
        href="#"
      >
        {text}
      </button>
    </>
  );
};

export default Button;
