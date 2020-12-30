import React from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";

const IndexPage = () => {
  return (
    <Layout>
      <div className='bg-gris container mx-auto w-full h-screen'>
        <h1 className='text-4xl font-semibold uppercase text-center pt-6'>
          Cursos
        </h1>

        <div className='mx-4 my-6'>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
