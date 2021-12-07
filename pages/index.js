import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Le Kebab Rose</title>
        <link rel="icon" href="../public/burger.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Carte />
    </div>
  );
}
