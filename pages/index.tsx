import { NextPage } from 'next';
import React from 'react';
import { Layout } from '../components/layouts';

const HomePage: NextPage = () => {
  return (
    <Layout title="Home - CookieMaster">
      <h1>Cookie Master</h1>
    </Layout>
  );
};

export default HomePage;
