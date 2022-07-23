import "../styles/globals.css";

import InfoBar from "../components/InfoBar";
import NavSideBar from "../components/NavSideBar";
import Dashboard from "../components/Dashboard";

function MyApp({ Component, pageProps }) {
  return (
    <div className="">
      <InfoBar />
      <div className="flex flex-row">
        <NavSideBar />
        <Dashboard />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
