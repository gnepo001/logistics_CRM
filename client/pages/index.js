import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import Dashboard from "../pages/dashboard";

import axios from "axios";

const Home = ({ drivers, expenses, linedata, events, sum }) => {
  return (
    <div className="">
      <Dashboard
        drivers={drivers}
        expenses={expenses}
        linedata={linedata}
        events={events}
        sum={sum}
      />
    </div>
  );
};

//Fetch Data for application
export const getServerSideProps = async () => {
  const drivers = await axios.get("http://localhost:5010/drivers");
  const sum = await axios.get("http://localhost:5010/sumInvoices");

  const linedata = await axios.get(
    `http://localhost:5010/expenses/fetchtype?type=all`
  );
  const events = await axios.get(`http://localhost:5010/events`);

  return {
    props: {
      drivers: drivers.data,
      sum: sum.data,
      linedata: linedata.data,
      events: events.data,
    },
  };
};

export default Home;
