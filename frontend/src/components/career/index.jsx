import React from 'react';
import './style.css';

const formattedNow = (() => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const date = String(now.getDate()).padStart(2, '0');
  return [year, month, date].join('.');
})();

function Introduce() {
  return (
    <div>
      <h1>학력</h1>
      <h2>대전대학교 컴퓨터공학과 졸업 (2013.03.02 ~ 2019.02.22)</h2>
      <h2>{`(주)모두텍 재직 중 (2019.01.07 ~ ${formattedNow})`}</h2>
      <h1>프로젝트 목록</h1>
    </div>
  );
}
export default Introduce;
