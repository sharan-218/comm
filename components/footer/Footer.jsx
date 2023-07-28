import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul className={styles.fLinks}>
        <li className={styles.fLi}>
          <Link href="#">Fb</Link>
        </li>
        <li className={styles.fLi}>
          <Link href="#">Insta</Link>
        </li>
        <li className={styles.fLi}>
          <Link href="#">LIn</Link>
        </li>
        <li className={styles.fLi}>
          <Link href="#">r/</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
