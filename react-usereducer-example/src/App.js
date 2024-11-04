import { useState, useReducer } from 'react';
import './App.css';

function App() {

  // state 생성
  // 현재 상태(read only), 값을 변경하는 함수
  // const [count, setCount] = useState(0); //초기값

  // 리듀서 함수: 이벤트에 따라 state를 변경하는 함수
  // 이전 state값, 액션
  function countReducer(oldCount, action){

    if(action.type === 'UP'){
      return oldCount + action.number;
    }else if(action.type === 'DOWN'){
      return oldCount - action.number;
    }else if(action.type === 'RESET'){
      return 0;
    }
  }

  // 리듀서 함수를 사용하여 state 생성
  // 인자: 리듀서(state을 변경하는 로직을 가지는 함수), state 초기값
  // 반환: 현재 state, 값을 변경하는 dispatch함수
  const [count, countDispatch] = useReducer(countReducer, 0);

  const [number, setNumber] = useState(1);

  function changeNumber(event){
    setNumber(Number(event.target.value))
  }

  // function down(){
  //   setCount(count-1);
  // }
  
  // function reset(){
  //   setCount(0);
  // }
  
  // function up(){
  //   setCount(count+1);
  // }
  
  return (
    <div class='App'>
      {/* <input type='button' value="-" onClick={down}></input>
      <input type='button' value="0" onClick={reset}></input>
      <input type='button' value="+" onClick={up}></input> */}
      <input type='button' value="-" onClick={()=>{
        countDispatch({type:'DOWN', number: number});
      }}></input>
      <input type='button' value="0" onClick={()=>{
        countDispatch({type:'RESET', number: number});
      }}></input>
      <input type='button' value="+" onClick={()=>{
        countDispatch({type:'UP', number: number});
      }}></input>
      <input type='text' value={number} onChange={changeNumber}></input>
      <span>{count}</span>
    </div>
  );
}

export default App;
