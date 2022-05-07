import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Student from "../conponens/Student";
import styles from "../styles/Home.module.css";
import { getAllHobbies } from "../lib/hobby";
export default function Home(props: any) {
  const students = [
    {
      name: "Byambatsogt",
      age: 16,
      gender: "male",
      photo: "/suzui.jpg",
      school: 36,
      brithday: "4/13",
      sideclass: "",
    },
    {
      name: "Andir",
      age: 18,
      gender: "male",
      photo: "/andir.jpg",
      school: "ӨЗБАС",
      brithday: "3/10",
      sideclass: "",
    },
    {
      name: "Boldbat",
      age: 17,
      gender: "male",
      photo: "/boldoo.webp",
      school: "ӨЗБАС",
      brithday: "6/4",
      sideclass: "",
    },
    {
      name: "Khuslen",
      age: 17,
      gender: "male",
      photo: "/huslen.jpg",
      school: 106,
      brithday: "11/22",
      sideclass: "",
    },
    {
      name: "Uuganbayar",
      age: 17,
      gender: "male",
      photo: "/uka.png",
      school: 15,
      brithday: "5/15",
      sideclass: "",
    },
  ];
  let x = 4;
  let fa = 0;
  if (x == 0) {
    fa = 1;
  } else {
    fa = 1;
    let i = 1;
    while (i <= x) {
      fa = fa * i;
      i = i + 1;
    }
  }
  console.log(props);
  return (
    <div className={styles.container}>
      <div>
        <Head>
          <title>japan</title>
          <meta name="description" content="hhe" />
          <link rel="icon" href="/flag.webp" />
        </Head>
        <div className={styles.grid}>
          <div className={styles.card}>
            <a href="http://localhost:3000/medeelel">
              <h2>A</h2>
            </a>
          </div>
          <div className={styles.card}>
            <a href="http://localhost:3000/medeelel">
              <h2>B</h2>
            </a>
          </div>
          <div className={styles.card}>
            <a href="http://localhost:3000/medeelel">
              <h2>C</h2>
            </a>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.contentbar}>
            {students.map((student: any, index: number) => (
              <Student key={`student_${index}`} student={student} />
            ))}
            {/* {props.allHobbies.map((hobby: any) => (
              <div>{hobby.ner}</div>
            ))} */}
            <div className={styles.zoom}></div>
          </div>
          <div className={styles.sidebar}>
            {students.map((student: any, index: number) => (
              <Student key={`student_${index}`} student={student} />
            ))}
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <a>
          Powered by <span className={styles.logo}></span>
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const allHobbies = (await getAllHobbies(false)) ?? [];
  return {
    props: { allHobbies },
  };
}
