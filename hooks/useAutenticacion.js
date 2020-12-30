import React, { useEffect, useState } from "react";
import firebase from "../firebase";

const useAutenticacion = () => {
  const [usuarioAutenticado, guardarUsuarioAutenticado] = useState(null);

  useEffect(() => {
    const unsuscribe = firebase.authentication.onAuthStateChanged((usuario) => {
      if (usuario) {
        guardarUsuarioAutenticado(usuario);
      } else {
        guardarUsuarioAutenticado(null);
      }
    });
    return () => unsuscribe();
  }, []);

  return usuarioAutenticado;
};

export default useAutenticacion;
