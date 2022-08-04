import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import ClientTitle from "../../components/ClientTitle";

//-- Wow I spend an entire 2 days doing the research and reading countless documentation and
//   Stack over flow but finally cleared out all the bugs in this slug Next js
//   Anyways, since this Slug recieves the id from the clients page I could not use getserversideprops
//   to fetch the data, so many many hours later I implemented useEffect to fetch the data. WOW
//   --Wow really proud of my determination here so happy, proud :)

const ClientInfo = () => {
  const router = useRouter();
  const { id } = router.query; //gets slug info from url

  const [clientData, setClientData] = useState({});

  //fetches data sets to state
  const fetchData = async () => {
    const data = await axios.get(`http://localhost:5010/clients/${id}`);
    setClientData(data.data);
    return data;
  };

  //runs at start of page and refresh dependent on router readiness
  useEffect(() => {
    if (router.isReady) {
      fetchData();
    }
  }, [router.isReady]);

  return (
    <div>
      <ClientTitle title={clientData.name} balance={clientData.balance} />
      <div className="bg-white">
        <div className="flex justify-around">
          <span>Date</span>
          <span>From</span>
          <span>To</span>
          <span>Price</span>
        </div>
      </div>
    </div>
  );
};

export default ClientInfo;
