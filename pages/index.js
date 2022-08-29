import Head from "next/head";
import Image from "next/image";

//components
import Hero from "../components/Hero";
import TransferUi from "../components/Transfer";
import Anon from "../components/Anon";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <Hero/>
          <TransferUi/>
          <Anon/>
        </div>
      </main>
    </div>
  );
}