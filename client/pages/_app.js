import "../styles/globals.css";

import InfoBar from "../components/InfoBar";
import NavSideBar from "../components/NavSideBar";

function MyApp({ Component, pageProps, drivers }) {
  return (
    <div className="">
      <InfoBar />
      <div className="flex flex-row">
        <NavSideBar />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
