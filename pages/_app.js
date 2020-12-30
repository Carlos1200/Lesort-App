import "../tailwindcss/tailwind.css";
import AuthState from "../context/auth/authState";
import firebase, { FirebaseContext } from "../firebase";
import useAutenticacion from "../hooks/useAutenticacion";

function MyApp({ Component, pageProps }) {
  const usuario = useAutenticacion();
  return (
    <FirebaseContext.Provider
      value={{
        firebase,
        usuario,
      }}>
      <AuthState>
        <Component {...pageProps} />
      </AuthState>
    </FirebaseContext.Provider>
  );
}

export default MyApp;
