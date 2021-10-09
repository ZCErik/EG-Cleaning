import React from 'react';
import Footer from '../components/layout/Footer';

const CleanLayout = ({ children }) => (
  <>
    <main className="site-content">
      {children}
    </main>
    <Footer />
  </>
);

export default CleanLayout;  