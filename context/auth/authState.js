import React, { useReducer } from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";
import { USUARIO_REGISTRADO, USUARIO_REGISTRADO_ERROR } from "../../types";

const AuthState = ({ children }) => {
  const initialState = {
    nombre: "",
    email: "",
    picture: "",
    inicial: "",
    cargando: true,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const registroUsuario = (credenciales) => {
    dispatch({
      type: USUARIO_REGISTRADO,
      payload: credenciales,
    });
  };

  const registroUsuarioFallido = () => {
    dispatch({
      type: USUARIO_REGISTRADO_ERROR,
    });
  };

  return (
    <authContext.Provider
      value={{
        nombre: state.nombre,
        email: state.email,
        picture: state.picture,
        inicial: state.inicial,
        cargando: state.cargando,
        registroUsuario,
        registroUsuarioFallido,
      }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthState;
