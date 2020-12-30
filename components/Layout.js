import React, { useEffect, useContext } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Sidebar from "./Sidebar";
import FirebaseContext from "../firebase/context";
import authContext from "../context/auth/authContext";

const Layout = ({ children }) => {
  const router = useRouter();

  const firebaseContext = useContext(FirebaseContext);
  const { usuario } = firebaseContext;

  const AuthContext = useContext(authContext);
  const { cargando } = AuthContext;

  useEffect(() => {
    const validar = () => {
      if (!usuario && !cargando) {
        console.log(!usuario && !cargando);
        router.push("/login");
      }
    };
    validar();
  }, [usuario]);

  return (
    <>
      <Head>
        <title>Lesort App</title>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'
          rel='stylesheet'
        />
        <script
          src='https://kit.fontawesome.com/2241e1018a.js'
          crossOrigin='anonymous'></script>
      </Head>
      <div className='grid grid-cols-9'>
        <Sidebar />
        <div className='col-start-3 col-end-12'>
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
