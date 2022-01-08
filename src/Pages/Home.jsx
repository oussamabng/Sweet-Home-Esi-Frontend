import React from 'react';
import Page from "../components/Page";
import Header from "../layout/Header";
import Auth from "../layout/Auth";
import Functions from '../layout/Functions';

const Home = () => {
  return (
    <Page title="SweetHome">
      <Header />
      <Auth />
      <Functions />
    </Page>
  );
  
}

export default Home;