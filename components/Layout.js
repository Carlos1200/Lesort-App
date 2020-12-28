import React from "react";
import Head from "next/head";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Lesort App</title>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Oswald:wght@300;700&display=swap'
          rel='stylesheet'
        />
        <script
          src='https://kit.fontawesome.com/c556beb5fe.js'
          crossorigin='anonymous'></script>
      </Head>
      <div className='grid grid-cols-9'>
        <Sidebar />
        <div className='col-start-3'>
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
