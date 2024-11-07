import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 3. 스토어를 사용하는 위치에 Provider로 감싸기
  // store 주입!
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// <상태 관리>

// 1. useState: state 한건만 관리

// 2. useReducer: state 한건만 관리 + 상태 변경 로직 분리

// 3. createStore: state를 여러건 관리 + 전역 범위 관리