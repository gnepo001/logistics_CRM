import React from "react";
import { MdOutlineExpandMore } from "react-icons/md";
import axios from "axios";
import Link from "next/link";

import Title from "../components/Title";

const gloablId = null;

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
        {clients.map((client) => (
          <div
            key={client._id}
            className="flex flex-row justify-around text-[003459] "
          >
            {/* <Link href="/clientInfo"> */}
            <Link
              href={{
                pathname: "/clients/[id]",
                query: {
                  id: client._id,
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

export const getServerSideProps = async () => {
  const clients = await axios.get("http://localhost:5010/clients");
  return {
    props: {
      clients: clients.data,
    },
  };
};

export default clients;
