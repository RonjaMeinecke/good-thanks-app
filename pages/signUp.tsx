import Head from "next/head";
import React from "react";
import Logo from "../components/Logo/Logo";
import SignUp from "../components/SignUp/SignUp";
import styles from "./signUpPage.module.css";

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
          <Logo
            fontColor="var(--primary-app-color-pastelYellow)"
            backgroundColor="var(--primary-app-color-green)"
            outlineColor="var(--primary-app-color-pastelYellow)"
          />
          <div className={styles.signUpComponent}>
            <SignUp />
          </div>
        </div>
      </main>
    </>
  );
}
