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
      </main>
    </>
  );
}
