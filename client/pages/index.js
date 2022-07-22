import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import InfoBar from "../components/InfoBar";
import NavSideBar from "../components/NavSideBar";
import Dashboard from "../components/Dashboard";

export default function Home() {
  return (
    <div className="">
      <InfoBar />
      <div className="flex flex-row">
        <NavSideBar />
        <Dashboard />
      </div>
    </div>
  );
}
