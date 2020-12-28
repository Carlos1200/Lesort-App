import React from "react";

const Sidebar = () => {
  return (
    <aside className='col-start-1 col-end-3 bg-secondary h-screen'>
      <div className='flex justify-around items-center'>
        <img className='w-64' src='/lesort.png' alt='logo' />
        <i className='fas fa-bars text-5xl pr-5 text-gray-700 cursor-pointer'></i>
      </div>
      <div className='mt-4 divide-y'>
        <button className='btn'>Cursos</button>
        <button className='btn'>Calendario</button>
        <button className='btn'>Anotaciones</button>
        <button className='btn'>Pendientes</button>
      </div>
    </aside>
  );
};

export default Sidebar;
