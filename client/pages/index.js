import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import axios from "axios";

// interface IProps{
//   drivers:
// }

const Home = ({ drivers }) => {
  //console.log(drivers[0].firstname);
  //drivers.map((driver) => console.log(driver.firstname));
  return (
    <div className="">
      <h1>hello</h1>
      <h1>hello</h1>
      {drivers.map((driver) => (
        <h1 key={driver._id}>{driver.firstname}</h1>
      ))}
    </div>
  );
};

export const getServerSideProps = async () => {
  const { data } = await axios.get("http://localhost:5010/");
  /*console.log(response.data[0].firstname);*/
  return {
    props: {
      drivers: data,
    },
  };
};

export default Home;
