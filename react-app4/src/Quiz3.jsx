import logo from './logo.svg';
import './App.css';

function Content(){
  return (
    <div>Content Component</div>
  );
}

function Section(){
  return (
    <div>
      <h1>Section Component</h1>
      <Content></Content>
      <Content></Content>
    </div>
  );
}

function App() {
  return (
    <div>
      <Section></Section>
      <Section></Section>
    </div>
  );
}

export default App;