import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <div className='bg-primary'>
      <div className='container mx-auto flex justify-center items-center h-screen'>
        <div className=' rounded-lg border border-black shadow w-1/3 bg-secondary'>
          <div className='my-5 mx-5'>
            <h1 className='text-4xl font-Oswald font-bold text-center uppercase'>
              Login
            </h1>
            <form>
              <div className='mt-3'>
                <label htmlFor='correo' className=' block font-xl font-bold '>
                  Correo:
                </label>
                <input
                  type='text'
                  placeholder='Tu Correo Electronico'
                  id='correo'
                  className='appearance-none w-full font-Oswald font-xl border border-black rounded px-1 py-2'
                />
              </div>
              <div className='mt-3'>
                <label htmlFor='password' className='block font-xl font-bold'>
                  Contraseña:
                </label>
                <input
                  type='password'
                  placeholder='Tu Contraseña'
                  className='appearance-none w-full font-Oswald font-xl border border-black rounded px-1 py-2'
                />
              </div>
              <input
                type='submit'
                className='w-full text-center text-white font-bold py-3 my-4 cursor-pointer bg-secundary-blue'
                value='Ingresar'
              />
            </form>
            <Link href='/crear-cuenta' className='flex justify-center'>
              <p className='font-xl text-white text-center cursor-pointer'>
                Nueva Cuenta
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
