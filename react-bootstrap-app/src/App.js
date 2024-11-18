import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './features/Home';
import Register from './features/Register';
import Login from './features/Login';

function App() {
  return (
    <>
      <Routes>
        {/* 중첩 라우트 설정 */}
        {/* /를 최상위 경로로 설정 */}
        <Route path="/" element={ <Layout></Layout> }>
          {/* 중첩 라우트는 부모와 자식 컴포넌트가 함께 렌더링되는 구조 */}
          {/* 예: /register : <Layout> + <Register> */}
          <Route path="/" element={ <Home/> } ></Route>
          <Route path="/register" element={ <Register/> } ></Route>
          <Route path="/login" element={ <Login/> } ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
