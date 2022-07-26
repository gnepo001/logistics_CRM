import "../styles/globals.css";

import InfoBar from "../components/InfoBar";
import NavSideBar from "../components/NavSideBar";

function MyApp({ Component, pageProps, drivers }) {
  return (
    <div className="">
      <div className="flex flex-row">
        <NavSideBar />
        <div className="flex flex-col w-full">
          <InfoBar />
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}

export default MyApp;
