import React from "react";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import firebase from "../firebase";

const CrearCuenta = () => {
  const formik = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("El Nombre es Obligatorio"),
      email: Yup.string()
        .email("El email no es válido")
        .required("El Email es obligatorio"),
      password: Yup.string()
        .required("El password no puede ir vacío")
        .min(6, "El password debe contener por lo menos 6 caracteres"),
    }),
    onSubmit: async (valores) => {
      try {
        await firebase.crearCuenta(valores);
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div className='bg-gray-800'>
      <div className='container mx-auto flex justify-center items-center h-screen'>
        <div className=' rounded-lg border border-black shadow w-full lg:w-1/3 md:w-1/2 bg-gray-700'>
          <div className='my-5 mx-5'>
            <h1 className='text-4xl font-Oswald font-bold text-center text-blue-600'>
              Crear Cuenta
            </h1>
            <form onSubmit={formik.handleSubmit}>
              <div className='mt-3'>
                <label
                  htmlFor='nombre'
                  className='text-white block font-xl font-bold '>
                  Nombre:
                </label>
                <input
                  type='text'
                  placeholder='Tu Nombre'
                  id='nombre'
                  className='appearance-none w-full font-Oswald font-xl border border-black rounded px-1 py-2'
                  value={formik.values.nombre}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.nombre && formik.errors.nombre ? (
                  <div className='my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4'>
                    <p className='font-bold'>Error</p>
                    <p>{formik.errors.nombre}</p>
                  </div>
                ) : null}
              </div>
              <div className='mt-3'>
                <label
                  htmlFor='email'
                  className='text-white block font-xl font-bold '>
                  Correo:
                </label>
                <input
                  type='text'
                  placeholder='Tu Correo Electronico'
                  id='email'
                  className='appearance-none w-full font-Oswald font-xl border border-black rounded px-1 py-2'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className='my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4'>
                    <p className='font-bold'>Error</p>
                    <p>{formik.errors.email}</p>
                  </div>
                ) : null}
              </div>
              <div className='mt-3'>
                <label
                  htmlFor='password'
                  className='block font-xl font-bold text-white'>
                  Contraseña:
                </label>
                <input
                  type='password'
                  placeholder='Tu Contraseña'
                  className='appearance-none w-full font-Oswald font-xl border border-black rounded px-1 py-2'
                  id='password'
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className='my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4'>
                    <p className='font-bold'>Error</p>
                    <p>{formik.errors.password}</p>
                  </div>
                ) : null}
              </div>
              <input
                type='submit'
                className='w-full text-center font-bold py-3 my-4 cursor-pointer '
                value='Ingresar'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrearCuenta;
