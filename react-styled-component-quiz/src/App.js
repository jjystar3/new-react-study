import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import MenuBar from './components/MenuBar';

function App() {

  console.log('App..');  

  return (
    <div>
      <MenuBar />
      {/* Router는 주소에 따라 화면이 전환될때 사용 */}
      {/* 조건: URL 주소 */}
      {/* 리턴: 새로운 UI */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;
