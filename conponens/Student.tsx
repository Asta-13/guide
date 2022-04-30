import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Student = (props: any) => {
  return (
    <div className={props.student.sideclass + " " + styles.cardners}>
      NAME: {props.student.name}
      <br />
      AGE: {props.student.age}
      <br />
      SCHOOL: {props.student.school}
      <br />
      BIRTHDAY: {props.student.brithday}
      <br />
      <Image
        src={props.student.photo}
        alt="Picture of the author"
        width={240}
        height={240}
      />
    </div>
  );
};

export default Student;
