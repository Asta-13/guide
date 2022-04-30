import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>hho</title>
        <meta name="description" content="hhe" />
        <link rel="icon" href="/flag.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <a href="http://localhost:3000/">
              <h2>SSJ</h2>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
