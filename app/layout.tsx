import React from 'react';
import "./globals.css";
import Header from './components/layouts/header/Header';
import Footer from './components/layouts/footer/Footer';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default RootLayout;
