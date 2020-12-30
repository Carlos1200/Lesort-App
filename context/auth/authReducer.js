import { USUARIO_REGISTRADO, USUARIO_REGISTRADO_ERROR } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case USUARIO_REGISTRADO:
      return {
        ...state,
        nombre: action.payload.name,
        email: action.payload.email,
        picture: action.payload.picture,
        inicial: action.payload.name.substring(0, 1),
        cargando: false,
      };
    case USUARIO_REGISTRADO_ERROR:
      return {
        ...state,
        cargando: false,
      };
    default:
      state;
  }
};
