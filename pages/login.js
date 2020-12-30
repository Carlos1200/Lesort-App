import React, { useContext, useReducer } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import Head from "next/head";
import * as Yup from "yup";
import firebase from "../firebase";
import authContext from "../context/auth/authContext";
const Login = () => {
  const router = useRouter();

  const AuthContext = useContext(authContext);
  const { registroUsuario } = AuthContext;

  const iniciarGoogle = async () => {
    const credenciales = await firebase.googleInicio();
    registroUsuario(credenciales);
    router.push("/");
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("El email no es válido")
        .required("El Email es obligatorio"),
      password: Yup.string().required("El password no puede ir vacío"),
    }),
    onSubmit: async (valores) => {
      const { email, password } = valores;
      try {
        const credenciales = await firebase.iniciarSesion(email, password);
        registroUsuario(credenciales);
        router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <Head>
        <title>Lesort App</title>
      </Head>
      <div className='bg-primary'>
        <div className='container mx-auto flex justify-center items-center h-screen'>
          <div className=' rounded-lg border border-black shadow w-full lg:w-1/3 md:w-1/2 bg-secondary'>
            <div className='my-5 mx-5'>
              <h1 className='text-4xl font-primary font-bold text-center uppercase'>
                Login
              </h1>
              <form onSubmit={formik.handleSubmit}>
                <div className='mt-3'>
                  <label htmlFor='email' className=' block font-xl font-bold '>
                    Correo:
                  </label>
                  <input
                    type='text'
                    placeholder='Tu Correo Electronico'
                    id='email'
                    className='appearance-none w-full font-primary font-xl border border-black rounded px-1 py-2'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className='my-2 bg-gray-200 text-red-700 p-2'>
                      <p>{formik.errors.email}</p>
                    </div>
                  ) : null}
                </div>
                <div className='mt-3'>
                  <label htmlFor='password' className='block font-xl font-bold'>
                    Contraseña:
                  </label>
                  <input
                    type='password'
                    placeholder='Tu Contraseña'
                    className='appearance-none w-full font-primary font-xl border border-black rounded px-1 py-2'
                    id='password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className='my-2 bg-gray-200 text-red-700 p-2'>
                      <p>{formik.errors.password}</p>
                    </div>
                  ) : null}
                </div>
                <input
                  type='submit'
                  className='w-full text-center text-white font-bold py-3 my-4 cursor-pointer rounded-lg bg-secundary-blue hover:bg-primary'
                  value='Ingresar'
                />
              </form>
              <div
                className=' flex justify-center items-center py-3 border-2 border-black rounded-lg hover:bg-gris'
                onClick={iniciarGoogle}>
                <img className='w-10 mr-3' src='/google.svg' alt='google' />
                <p>Iniciar con Google</p>
              </div>
              <Link href='/crear-cuenta' className='flex justify-center '>
                <p className='font-2xl text-center cursor-pointer py-3 mt-4 font-primary border-2 border-black rounded-lg hover:bg-gris'>
                  Nueva Cuenta
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
