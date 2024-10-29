import logo from './logo.svg';
import './App.css';

function Home(){
  return (
    <div>Home</div>
  );
}

function About(){
  return (
    <div>About</div>
  );
}

function Contact(){
  return (
    <div>Contact</div>
  );
}

function Navbar(){
  return (
    <nav>
      <Home></Home>
      <About></About>
      <Contact></Contact>
    </nav>
  );
}

function App() {
  return (
    <div>
      <h1>Navigation</h1>
      <Navbar></Navbar>
    </div>
  );
}

export default App;
