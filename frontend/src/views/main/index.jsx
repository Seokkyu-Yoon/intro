import React, { useEffect, useState } from 'react';

import pages from '../../core/pages';

import Header from '../../components/header';
import Footer from '../../components/footer';
import Introduce from '../../components/introduce';

import './style.css';

function Main() {
  const [page, setPage] = useState(0);
  const [isIntroduce, setIsIntroduce] = useState(true);
  const [isProject, setIsProject] = useState(false);

  useEffect(() => {
    setIsIntroduce(pages[page] === '소개');
    setIsProject(pages[page] === '경력');
  }, [page]);

  return (
    <div className="body">
      <Header onPageChange={setPage} />
      {isIntroduce && Introduce()}
      {isProject && (<h1>프로젝트 리스트</h1>)}
      <Footer />
    </div>
  );
}

export default Main;
