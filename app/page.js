"use client";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import { useState, useEffect } from "react";
export default function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => setUsers([...data]));
  }, []);
  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.title}>Welcome to Commu.</h1>
        <p className={styles.des}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque cum
          dolor, deleniti natus facere ipsa!
        </p>
        <div className={styles.meet}>
          <h1>Share your Thoughts</h1>
          <h2>Create Quotes</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod,
            facilis laboriosam provident minima dicta ullam!
          </p>
          <Button text="Get Started" m="1rem auto" />
        </div>
        <div className={styles.mainUsers}>
          <h1>Our Top Members</h1>
          <div className={styles.users}>
            {users.map((user, index) => (
              <div key={index} className={styles.userCard}>
                <h2>{user.name}</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  porro omnis nostrum, corrupti
                </p>
                <p>{user.website}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
