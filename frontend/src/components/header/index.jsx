import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setIntroduce, setCareer } from '../../store/slicePage';

import './style.css';

function Header() {
  const page = useSelector((state) => state.page.value);
  const dispatch = useDispatch();

  return (
    <div className="header">
      <button className={page === '소개' ? 'selected' : ''} type="button" onClick={() => { dispatch(setIntroduce()); }}>소개</button>
      <button className={page === '경력' ? 'selected' : ''} type="button" onClick={() => { dispatch(setCareer()); }}>경력</button>
    </div>
  );
}
export default Header;
