import React from "react";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import styles from "./home.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.container}>
        <img className={styles.girlOnSwing} src="/assets/girlOnSwing.svg" />
        <div className={styles.header}>
          <HeaderComponent />
        </div>
        <h1 className={styles.greeting1}>hello</h1>
        <h2 className={styles.greeting2}>beautiful</h2>
        <img className={styles.shapes} src="/assets/shapesBG.svg" />
        <div className={styles.textContainer}>
          <h3 className={styles.my}>my</h3>
          <h4 className={styles.habits}>habits</h4>
        </div>
      </main>
    </>
  );
}
