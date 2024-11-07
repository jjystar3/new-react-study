import { createSlice } from '@reduxjs/toolkit';

export const addTodoSlice = createSlice({
  name: 'todoSlice',
  initialState: { todolist: [] },
  reducers: {
    add: (state, action) => {
      let id = 0;
      if(state.todolist.length > 0){
        id = state.todolist.length;
      }
      state.todolist.push({ id: id, text: action.payload});
    },
    reset: (state) => {
      state.todolist = [];
    },
    delete: (state, action) => {
      let list = state.todolist;
      state.todolist = list.filter(todo => todo.id !== action.payload);
    }
  },
});