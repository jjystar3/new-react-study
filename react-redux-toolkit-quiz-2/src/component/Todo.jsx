import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodoSlice } from '../store/addTodoSlice';

// useDispatch: 스토어에 있는 state를 변경하는 함수
// useSelector: 스토어에 있는 state를 조회하는 함수

// todo ui를 반환하는 컴포넌트
export const Todo = () => {

  const [input, setInput] = useState('');
  
  // redux 스토어에서 dispatch 함수 가져오기
  const dispatch = useDispatch();

  // redux 스토어의 state 중 todolist 가져오기
  const todolist = useSelector((state) => state.addTodo.todolist);

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="새 할 일 입력"
      />
      <button onClick={()=>{
        // 디스패치에 'ADD'액션을 전달 + TODO 데이터 함께 전달
        dispatch(addTodoSlice.actions.add(input));
        setInput('');
      }}>추가</button>
      <button onClick={() =>
        // 디스패치에 'RESET'액션을 전달 
        dispatch(addTodoSlice.actions.reset())}>초기화</button>
      <ul>
        {/* 배열의 map함수를 사용하여 li 태그 생성 */}
        {/* jsx에서 태그를 동적으로 생성할때는 key 입력해야함 */}
        {todolist.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() =>
              // 디스패치에 'ADD'액션을 전달
              // 삭제 -> 단건삭제 또는 일괄삭제
              // 단건삭제 -> TODO의 ID
              dispatch(addTodoSlice.actions.delete(todo.id))}>
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

// export default Todo