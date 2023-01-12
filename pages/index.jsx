import Head from "next/head";
import { Layout } from "../components/ui/Layout";
import Analytics from "../components/wrappers/firebase/Analytics";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title name="title" content="Mavi Reddel" />
        <meta
          name="description"
          content="Projects Management and Report Generator app"
        />
        <meta
          name="keywords"
          content="app, projects, management, report, generator"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Spanish" />
        <meta name="author" content="Tembok Panama" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=poppins:300,400,500,700&display=swap"
        />
      </Head>
      <Analytics>
        <Layout />
      </Analytics>
    </>
  );
}
