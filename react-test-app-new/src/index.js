import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createContext } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { login } from './store/memberSlice';

// API 서버 주소
let host = 'http://localhost:8080';

// Context 생성
// Context: 여러 컴포넌트에서 값을 공유할 때 사용
// Store, Slice: 여러 컴포넌트에서 state를 공유할 때 사용
export const Context = createContext();

let userStr = localStorage.getItem('user');
let token = localStorage.getItem('token');

if (userStr !== null) {
  const user = JSON.parse(userStr);
  store.dispatch(login({ user: user, token: token }));
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      {/* Context.Provider로 App 컴포넌트 감싸기 */}
      {/* 하위 컴포넌트들에게 host 데이터 전달 */}
      <Context.Provider value={{host}}>
        <Provider store={store}>
          <App />
        </Provider>
      </Context.Provider>
    </React.StrictMode>
  </BrowserRouter>
);