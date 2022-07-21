import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import InfoBar from "../components/InfoBar";
import NavSideBar from "../components/NavSideBar";

export default function Home() {
  return (
    <div className="">
      <InfoBar />
      <NavSideBar />
    </div>
  );
}
