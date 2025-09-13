import React from "react";
import "./global.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Layout from "../Components/Layout";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}

export default MyApp;
