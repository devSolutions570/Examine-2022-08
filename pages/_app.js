import "../css/application.css";
import Head from "next/head";
import Layout from "@components/layout";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Examine</title>
        <meta
          name="Examine"
          content="Examine"
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
