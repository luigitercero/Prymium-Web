import React from 'react';
import Footer from './Footer';
import Header from './Header';
import '../styles/components/app.scss';

const Layout = ({ children }) => {
  return (
    <div className="main">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
