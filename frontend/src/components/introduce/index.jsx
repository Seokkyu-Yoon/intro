import React from 'react';
import './style.css';

const age = new Date().getFullYear() - 1994 + 1;

function Introduce() {
  return (
    <div className="container">
      <h1>
        인사말 👋
      </h1>
      <p>
        안녕하세요,
        <p className="blue">윤석규</p>
        입니다.
      </p>
      <p>
        저는 현재 대전에 거주 중인
        {' '}
        <p className="blue">{`${age}살`}</p>
        {' '}
        개발자입니다.
      </p>
      <p>
        <p className="blue">결혼</p>
        하여 아내, 두 아들과 가정을 이루어 행복하게 살아가고 있습니다.
      </p>
      <p>새롭게 배우는 것을 좋아하고, 과거의 것을 탄탄하게 다지는 것을 좋아합니다.</p>
      <p>
        <p className="blue">게임개발</p>
        (1인이여도)을 진행해 조그만하더라도 런칭해보는 것이
        {' '}
        <p className="blue">버킷리스트</p>
        {' '}
        중 하나입니다.
      </p>
      <h1>주 기술스택 ⚡️</h1>
      <p>
        학부 땐
        {' '}
        <p className="blue">java</p>
        {' '}
        를 주로 사용했고, 현재는
        {' '}
        <p className="blue">javascript, python</p>
        {' '}
        을 주로 사용하고 있습니다.
      </p>
      <p>
        백엔드 기술로는
        {' '}
        <p className="blue">express</p>
        {' '}
        를 주로 사용하고, 프론트엔드는
        {' '}
        <p className="blue">vuejs</p>
        {' '}
        를 주로 사용하고 있습니다.
      </p>
      <h1>관심사 ❤️</h1>
      <p>
        <p className="blue">docker</p>
        {' '}
        에 대한 기본 지식밖에 없어 Kubernetics 개념까지 확장하고 싶습니다.
      </p>
      <p>
        <p className="blue">unity</p>
        {' '}
        를 공부해보고 싶습니다.
      </p>
      <p>
        최근
        {' '}
        <p className="blue">3d 모델링</p>
        {' '}
        툴을 이용해 간단한 모델을 만들고,
        {' '}
        <p className="blue">threejs</p>
        {' '}
        를 통해 웹에 올리거나
        {' '}
        <p className="blue">unity</p>
        {' '}
        를 이용한 결과를 보고 싶습니다.
      </p>
    </div>
  );
}
export default Introduce;
