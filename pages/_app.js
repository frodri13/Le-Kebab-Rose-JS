import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { ChoiceContext } from "../context/ChoiceContext";
import { useState, useMemo } from "react";

function MyApp({ Component, pageProps }) {
  const [choice, setChoice] = useState("hello from context");

  const providerValue = useMemo(
    () => ({ choice, setChoice }),
    [choice, setChoice]
  );

  return (
    <Layout>
      <ChoiceContext.Provider value={providerValue}>
        <Component {...pageProps} />
      </ChoiceContext.Provider>
    </Layout>
  );
}

export default MyApp;
