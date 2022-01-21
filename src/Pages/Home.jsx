import React from 'react';
import Page from "../components/Page";
import Header from "../layout/Header";
import Auth from "../layout/Auth";
import Functions from '../layout/Functions';
import Features from '../layout/Features';
import Footer from '../layout/Footer';

const Home = () => {
  return (
    <Page title="SweetHome">
      <Header />
      <Auth />
      <Functions />
      <Features />
      <Footer />
    </Page>
  );
  
}

export default Home;