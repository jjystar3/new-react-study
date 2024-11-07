import { createSlice } from '@reduxjs/toolkit';

// redux -> redux toolkit 방식으로 변경

// redux toolkit: redux + 부가기능
// 1. 스토어를 기능별로 나눌 수 있음
// 2. state의 불변성을 유지할 필요가 없음

// toolkit으로 스토어 만드는 방법
// 카운터 슬라이스 생성 > 슬라이스를 모아서 스토어 생성

// 변경
// reducer + createStore => createSlice + configureStore

// 1. 카운터 슬라이스 생성 (작은 스토어)

// 인자: {} 슬라이스 이름, 상태 초기값, 리듀서함수
// key값은 고정!

// 카운트 슬라이스 내보내기
export const countSlice = createSlice({
  name: 'counterSlice',
  initialState: { num: 0 },
  // 액션타입별로 리듀서 함수 정의
  // 액션타입: 함수
  reducers: {
    up: (state, action) =>{
      // step만큼 num의 값을 증가시키기
      state.num += action.payload;
    }
  }
});