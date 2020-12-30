import app from "firebase/app";
import "firebase/auth";

import firebaseConfig from "./config";

class Firebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(firebaseConfig);
    }
    this.authentication = app.auth();
  }
  //Crea una cuenta
  async crearCuenta(credenciales) {
    const { nombre, email, password } = credenciales;
    const nuevoUsuario = await this.authentication.createUserWithEmailAndPassword(
      email,
      password
    );

    return await nuevoUsuario.user.updateProfile({
      displayName: nombre,
    });
  }

  async iniciarSesion(email, password) {
    const usuario = await this.authentication
      .signInWithEmailAndPassword(email, password)
      .then((result) => ({
        name: result.user.displayName,
        email: result.user.email,
        picture: result.user.photoURL,
      }));
    return usuario;
  }

  async googleInicio() {
    const provider = new app.auth.GoogleAuthProvider();

    const usuario = await this.authentication
      .signInWithPopup(provider)
      .then((result) => ({
        name: result.user.displayName,
        email: result.user.email,
        picture: result.user.photoURL,
      }));
    return usuario;
  }
  async cerrarSesion() {
    await this.authentication.signOut();
  }
}

const firebase = new Firebase();
export default firebase;
