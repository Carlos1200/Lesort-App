import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Avatar from "@material-ui/core/Avatar";
import authContext from "../context/auth/authContext";
import firebase from "../firebase";

const Sidebar = () => {
  const router = useRouter();

  const AuthContext = useContext(authContext);
  const { picture, inicial } = AuthContext;

  const cerrar = async () => {
    try {
      await firebase.cerrarSesion();
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <aside className='col-start-1 col-end-3 bg-secondary h-screen overflow-hidden '>
      <div className='flex justify-around items-center'>
        <img className='w-64' src='/lesort.png' alt='logo' />
        <i className='fas fa-bars text-5xl pr-5 text-gray-700 cursor-pointer'></i>
      </div>
      <div className='grid grid-rows-5 mt-7'>
        <div className='mt-4 divide-y row-start-1 row-end-4'>
          <button className='btn'>Cursos</button>
          <button className='btn'>Calendario</button>
          <button className='btn'>Anotaciones</button>
          <button className='btn'>Pendientes</button>
        </div>
        <div
          className='btn row-start-5 flex items-center justify-evenly'
          onClick={cerrar}>
          {picture ? (
            <Avatar alt='Usuario' src={picture} />
          ) : (
            <Avatar alt='Usuario'>{inicial}</Avatar>
          )}
          <p>Cerrar Sesión</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
