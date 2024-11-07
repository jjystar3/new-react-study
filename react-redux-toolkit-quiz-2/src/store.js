import { createStore } from "redux";

// 스토어 만드는 법
// 리듀서 함수 정의 -> 스토어 생성 -> Provider 설정

// 1. 리듀서 함수 정의: 상태 변경 로직
function reducer(oldState, action) {

  // state의 특징
  // 1. react는 이전 state를 보관하려는 성격이 있음
  // 2. state는 object로 관리되기 때문에 값을 추가해도 변화X
  // object 변수에는 주소값이 저장됨

  // state 복제본 생성
  let newState = { ...oldState };
  let list = newState.todolist;

  switch (action.type) {
    case 'ADD':

      // 새로운 todo의 ID
      let newId = 0;

      // 리스트가 하나도 없으면 0, 있으면 리스트의 길이
      // newState: { todolist:[] }
      if (list.length !== 0) {
        newId = list[list.length - 1].id + 1;
      }
      // 리스트에 새로운 요소 추가
      list.push({ id: newId, text: action.text });
      // 새로운 배열X 새로운 state 반환!
      return newState;
    case 'DELETE':
      // state 중에서 list를 꺼내고 선택한 아이디를 제거
      // filter함수는 원본데이터를 변경하지 않음!
      // 그래서 state의 list를 교체해야함
      newState.todolist = list.filter(todo => todo.id !== action.id);
      // 변경된 리스트로 교체
      return newState;
    case 'RESET':
      // state 중에 list를 초기화하여 반환
      newState.todolist = [];
      // 새로운 state 반환
      return newState;
    default:
      return oldState;
  }

}

const init = { todolist: [] }

// 리듀서함수, 초기값
// 2. redux 스토어 생성
// 인자: 리듀서, state 초기값
export const store = createStore(reducer, init);