import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Header from './components/header';
import Footer from './components/footer';
import Introduce from './components/introduce';
import Career from './components/career';

import './app.css';

function App() {
  const page = useSelector((state) => state.page.value);
  const [isIntroduce, setIsIntroduce] = useState(true);
  const [isProject, setIsProject] = useState(false);

  useEffect(() => {
    setIsIntroduce(page === '소개');
    setIsProject(page === '경력');
  }, [page]);

  return (
    <div className="app">
      <Header />
      <div className="contents">
        {isIntroduce && <Introduce />}
        {isProject && <Career />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
