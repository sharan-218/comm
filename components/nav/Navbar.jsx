import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import { Pacifico } from "next/font/google";
const pacif = Pacifico({ subsets: ["latin", "cyrillic"], weight: ["400"] });
function Navbar() {
  const links = [
    {
      title: "Home",
      url: "/",
      id: 0,
    },
    {
      title: "About",
      url: "/about",
      id: 1,
    },
    {
      title: "Blog",
      url: "/blog",
      id: 2,
    },
    {
      title: "Dashboard",
      url: "/dashboard",
      id: 3,
    },
    {
      title: "Contact",
      url: "/contact",
      id: 4,
    },
  ];
  return (
    <>
      <div className={styles.topNav}>
        <h1 className={...pacif.className}>Comm.</h1>
        {links.map((link) => (
          <Link href={link.url} key={link.id} className={styles.NLinks}>
            {link.title}
          </Link>
        ))}
        <Link href="#">
          <Button text="Sign up" br="15px" />
        </Link>
      </div>
    </>
  );
}

export default Navbar;
