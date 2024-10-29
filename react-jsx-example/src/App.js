import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {

  // jsx는 하나의 요소만 반환해야 하므로
  // 부모 태그로 자식들을 감싸야 한다
  return (
    // 빈태그
    <>
      <h1>안녕하세요</h1>
      <h1>안녕하세요</h1>
    </>
  );
}

export default App;
