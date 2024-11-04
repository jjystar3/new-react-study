import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// useState: 값이 변경되면 화면이 다시 렌더링됨
// useReducer: 기능은 같음 + 상태변경 로직을 중앙에서 처리