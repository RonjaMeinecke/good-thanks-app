import React from "react";
import PlusButton from "../components/Buttons/PlusButton";
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
          <div className={styles.addBtn}>
            <PlusButton primary />
          </div>
          <form className={styles.myHabits}>
            <input
              type="text"
              className={styles.makeTheBed}
              placeholder="making the bed"
              required
            />
            <input
              type="text"
              className={styles.inputJournal}
              placeholder="journal"
              required
            />
          </form>
        </div>
      </main>
    </>
  );
}
