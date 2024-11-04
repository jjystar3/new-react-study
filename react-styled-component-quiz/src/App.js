import logo from './logo.svg';
import './App.css';
import { Route, Routes, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HomeDiv = styled.div`
  margin-top: 10px;
  padding: 10px;
  background-color: aliceblue;
`;

const AboutDiv = styled.div`
  margin-top: 10px;
  padding: 10px;
  background-color: pink;
`;

const ContactDiv = styled.div`
  margin-top: 10px;
  padding: 10px;
  background-color: yellow;
`;

const MenuBarDiv = styled.div`
  background-color: gainsboro;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
`;

function Home() {
  return (
    <HomeDiv>
      <h2>Home</h2>
      Home Page...
    </HomeDiv>
  );
}

function About() {
  return (
    <AboutDiv>
      <h2>About</h2>
      About Page...
    </AboutDiv>
  );
}

function Contact() {
  return (
    <ContactDiv>
      <h2>Contact</h2>
      Contact Page...
    </ContactDiv>
  );
}

function MenuBar() {
  return (
    <MenuBarDiv>
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/about">
        About
      </NavLink>
      <NavLink to="/contact">
        Contact
      </NavLink>
    </MenuBarDiv>
  );
}

function App() {
  return (
    <div>
      <MenuBar />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>

    </div>
  );
}

export default App;
