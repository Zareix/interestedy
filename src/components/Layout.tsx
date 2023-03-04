import Head from "next/head";
import { Inter as Font } from "next/font/google";

import Navbar from "./Navbar";

const font = Font({
  subsets: ["latin"],
});

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Interestedy</title>
        <meta name="description" content="Store your interesting things" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={`sticky top-0 flex w-full border-b ${font.className}`}>
        <Navbar />
      </header>
      <main className={`${font.className} overflow-hidden`}>{children}</main>
    </>
  );
};

export default Layout;
