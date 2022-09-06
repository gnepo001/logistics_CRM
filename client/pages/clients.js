import React from "react";
import { MdOutlineExpandMore } from "react-icons/md";
import axios from "axios";
import Link from "next/link";

//imports standard title for page
import Title from "../components/Title";

const clients = ({ clients }) => {
  return (
    <div>
      <Title title="Clients" />
      <div className="border-zinc-200 border-solid border-2 mt-5 mx-5 rounded-md bg-white">
        <div className="flex flex-row justify-around bg-[#007EA7] rounded-md text-white">
          <h1>Client</h1>
          <h1>Balance</h1>
          <h1>Trips</h1>
        </div>

        {/* maps out all clients into sheet */}
        {clients.map((client) => (
          <div
            key={client._id}
            className="flex flex-row justify-around text-[003459] "
          >
            {/*Links to specific data for client*/}
            <Link
              href={{
                pathname: `/clients/${client._id}`,
                query: {
                  //id: client._id,
                  clientname: client.name, //send in data for specific client page
                },
              }}
            >
              <div className="flex flex-row hover:underline">
                <MdOutlineExpandMore />
                <a>{client.name}</a>
              </div>
            </Link>
            <span>{client.balance}</span>
            <span>{client.trips}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

//fetch all clients in database
export const getServerSideProps = async () => {
  const clients = await axios.get("http://localhost:5010/clients");
  return {
    props: {
      clients: clients.data,
    },
  };
};

export default clients;
