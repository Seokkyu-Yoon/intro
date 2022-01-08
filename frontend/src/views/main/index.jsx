import React from 'react';
import './style.css';

import Header from '../../components/header';
import Footer from '../../components/footer';

function Main() {
  return (
    <div className="body">
      <Header />
      <h1>안녕하세요</h1>
      <Footer />
    </div>
  );
}

export default Main;
