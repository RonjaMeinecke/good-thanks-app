import Head from "next/head";
import React from "react";
import Logo from "../components/Logo/Logo";
import styles from "./index.module.css";

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

      <main className={styles.Container}>
        <div className={styles.Logo}>
          <p>PAGE WILL FOLLOW</p>
          <Logo
            fontColor="var(--primary-font-color-brown)"
            backgroundColor="var(--primary-app-color-turquoise)"
          />
        </div>
      </main>
    </>
  );
}
