import { Todo } from './component/Todo';

// npm install redux react-redux

// todo 앱에서 관리하는 state
// state를 쓰는 이유: 값이 변경되면 화면을 다시 생성해야함
// 입력필드의 todo
// todo 리스트 -> 스토어를 통해서 관리

function App() {  
  return (
    <div>
      <h3>To-Do List</h3>
      <Todo></Todo>
    </div>
  );
}

export default App;
