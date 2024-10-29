import logo from './logo.svg';
import './App.css';

function Item(){
  return (
    <div>Item Component</div>
  );
}

function App() {
  return (
    <div>
      <h1>Item List</h1>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
    </div>
  );
}

export default App;
