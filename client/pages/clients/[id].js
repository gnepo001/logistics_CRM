import React, { useEffect, useState } from "react";
//import { useRouter } from "next/router";
import { useRouter } from "next/dist/client/router";

import axios from "axios";

import ClientTitle from "./ClientTitle";

//-- Wow I spend an entire 2 days doing the research and reading countless documentation and
//   Stack over flow but finally cleared out all the bugs in this slug Next js
//   Anyways, since this Slug recieves the id from the clients page I could not use getserversideprops
//   to fetch the data, so many many hours later I implemented useEffect to fetch the data. WOW
//   --Wow really proud of my determination here so happy, proud :)

const ClientInfo = () => {
  const router = useRouter();
  const { id, clientname } = router.query; //gets slug info from url

  //gets slug info from url
  // beings in second data set before had error of unable to
  // get client data quickly to load data

  const [clientData, setClientData] = useState({});
  const [clientInvoices, setClientInvoices] = useState(null);

  //fetches data sets to state
  const fetchData = async () => {
    const data = await axios.get(`http://localhost:5010/clients/${id}`);
    setClientData(data.data);

    return data;
  };

  //get client specific invoices
  const fetchInvoices = async () => {
    const invoices = await axios.get(
      `http://localhost:5010/clients/${id}/fetch?client=${clientname}`
    );
    setClientInvoices(invoices.data);
  };

  //runs at start of page and refresh dependent on router readiness
  useEffect(() => {
    if (router.isReady) {
      fetchData();
      fetchInvoices();
    }
  }, [router.isReady]);

  return (
    <div>
      <ClientTitle
        title={clientData.name}
        clientname={clientname}
        balance={clientData.balance}
        clientId={clientData.clientId}
      />
      <div className="bg-white">
        <div className="flex justify-around">
          <span>Date</span>
          <span>From</span>
          <span>To</span>
          <span>Price</span>
        </div>
        {clientInvoices &&
          clientInvoices.map((invoice) => (
            <div key={invoice._id} className="flex justify-around">
              <div>{invoice.date}</div>
              <div>{invoice.from}</div>
              <div>{invoice.to}</div>
              <div>{invoice.price}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ClientInfo;
