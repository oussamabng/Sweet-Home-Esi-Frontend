import React from 'react';
import Page from "../components/Page";
import Header from "../layout/Header";
import Auth from "../layout/Auth";

const Home = () => {
  return (
    <Page title="SweetHome">
      <Header />
      <Auth />
    </Page>
  );
  
}

export default Home;