import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import Dashboard from "../components/Dashboard";

import axios from "axios";

const Home = ({ drivers, expenses, linedata, events }) => {
  return (
    <div className="">
      <Dashboard
        drivers={drivers}
        expenses={expenses}
        linedata={linedata}
        events={events}
      />
    </div>
  );
};

//Fetch Data for application
export const getServerSideProps = async () => {
  const drivers = await axios.get("http://localhost:5010/drivers");
  const expenses = await axios.get("http://localhost:5010/expenses");

  const linedata = await axios.get(
    `http://localhost:5010/expenses/fetchtype?Fuel`
  );
  const events = await axios.get(`http://localhost:5010/events`);

  return {
    props: {
      drivers: drivers.data,
      expenses: expenses.data,
      linedata: linedata.data,
      events: events.data,
    },
  };
};

export default Home;
