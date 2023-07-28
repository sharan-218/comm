import React from "react";
import styles from "./page.module.css";
import Button from "../button/Button";
import Image from "next/image";
const Acard = ({ title, about }) => {
  // const ImgStyles = {
  //   position: "absolute",
  //   backgroundPosition: "center",
  //   backgroundSize: "cover",
  // };
  return (
    <>
      <>
        <div className={styles.aCard}>
          <h1>{title}</h1>
          <p>{about}</p>
          {/* <Image
            width="100%"
            height="100%"
            style={ImgStyles}
            src={img ? img : false}
            alt="image"
          /> */}
          <Button text="Meet" />
        </div>
      </>
    </>
  );
};

export default Acard;
