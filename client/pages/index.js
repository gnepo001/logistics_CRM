import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Dashboard from "../components/Dashboard";

import axios from "axios";

// interface IProps{
//   drivers:
// }

const Home = ({ drivers, expenses }) => {
  return (
    <div className="">
      <Dashboard drivers={drivers} expenses={expenses} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const drivers = await axios.get("http://localhost:5010/drivers");
  const expenses = await axios.get("http://localhost:5010/expenses");
  return {
    props: {
      drivers: drivers.data,
      expenses: expenses.data,
    },
  };
};

export default Home;
