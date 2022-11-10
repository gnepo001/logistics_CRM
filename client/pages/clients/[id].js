import React, { useEffect, useState } from "react";
//import { useRouter } from "next/router";
import { useRouter } from "next/dist/client/router";

import axios from "axios";
import moment from "moment";

import ClientTitle from "./ClientTitle";
import client from "../../../server/models/client";

//-- Wow I spend an entire 2 days doing the research and reading countless documentation and
//   Stack over flow but finally cleared out all the bugs in this slug Next js
//   Anyways, since this Slug recieves the id from the clients page I could not use getserversideprops
//   to fetch the data, so many many hours later I implemented useEffect to fetch the data. WOW
//   --Wow really proud of my determination here so happy, proud :)

const ClientInfo = () => {
  const router = useRouter();
  const { id, clientname, clientBalance } = router.query; //gets slug info from url

  //gets slug info from url
  // beings in second data set before had error of unable to
  // get client data quickly to load data

  const [clientData, setClientData] = useState({});
  const [clientInvoices, setClientInvoices] = useState(null);
  const [sum, setSum] = useState(0);

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

  const handleUpdatePayment = async (id2) => {
    await axios
      .patch(`http://localhost:5010/clients/invoices/${id2}`)
      .then(window.location.reload());
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
          <span>Paid</span>
        </div>
        {clientInvoices &&
          clientInvoices.map((invoice) => (
            <div key={invoice._id} className="flex justify-around mx-10">
              <div className="w-1/5">
                {moment(invoice.date).format("M-D-YYYY")}
              </div>
              <div className="w-1/5">{invoice.from}</div>
              <div className="w-1/5">{invoice.to}</div>
              <div className="w-1/5">{invoice.price}</div>
              {invoice.completed == null ? (
                <span className="w-1/5">N/A</span>
              ) : invoice.completed ? (
                <div className="w-1/5">
                  <button className="bg-green-300 rounded-lg">Paid</button>
                </div>
              ) : (
                <div className="w-1/5">
                  <button
                    className="bg-gray-300 hover:bg-[#007EA7] rounded-lg"
                    onClick={() => handleUpdatePayment(invoice._id)}
                  >
                    Not Paid
                  </button>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ClientInfo;
