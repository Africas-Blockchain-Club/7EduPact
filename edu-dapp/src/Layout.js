import React from 'react';
import Header from './components/pages/Header';
import Footer from './components/pages/Footer';
import { useLocation } from 'react-router-dom';

function Layout({ children }) {
  const location = useLocation();
  const hideForRegistration = location.pathname === "/student-registration";

  return (
    <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      {!hideForRegistration && <Header />}
      <div style={{flexGrow: 1}}>
        {children}
      </div>
      {!hideForRegistration && <Footer />}
    </div>
  );
}

export default Layout;
