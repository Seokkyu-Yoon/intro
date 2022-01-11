import React from 'react';
import './style.css';

const age = new Date().getFullYear() - 1994 + 1;
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
      <h1>인사말</h1>
      <h2>{`안녕하세요, 저는 현재 대전에 거주 중인 ${age}살 개발자입니다.`}</h2>
      <h2>새로운 것에 있어서 배우는 걸 좋아하고, 과거의 것을 탄탄하게 다지는 것을 좋아합니다.</h2>
      <h2>게임개발(1인이여도)을 진행해 조그만하더라도 런칭해보는 것이 버킷리스트 중 하나입니다.</h2>
      <h2>아내, 두 형제와 가정을 이루어 행복하게 살아가고 있습니다.</h2>
      <h1>학력</h1>
      <h2>대전대학교 컴퓨터공학과 졸업 (2013.03.02 ~ 2019.02.22)</h2>
      <h2>{`(주)모두텍 재직 중 (2019.01.07 ~ ${formattedNow})`}</h2>
    </div>
  );
}
export default Introduce;
