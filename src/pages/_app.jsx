import Head from "next/head";
import "../styles/index.css";
import { AuthUserProvider } from "../AuthUserContext.js";
import "../App.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>EduLive</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AuthUserProvider>
        <Component {...pageProps} />
      </AuthUserProvider>
    </>
  );
}

export default MyApp;
