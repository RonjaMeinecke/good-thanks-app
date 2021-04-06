import Head from "next/head";
import React from "react";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import styles from "./home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>good thanks.</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        ></meta>
      </Head>

      <main className={styles.container}>
        <HeaderComponent />
      </main>
    </>
  );
}
