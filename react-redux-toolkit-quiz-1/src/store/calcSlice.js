import { createSlice } from '@reduxjs/toolkit';

const calculateResult = (operator, value1, value2) => {
  switch (operator) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value2 !== 0 ? value1 / value2 : 'Error'; // Handling divide by zero case
    default:
      return null;
  }
};

export const calcSlice = createSlice({
  name: 'calcSlice',
  initialState: { result: null },
  reducers: {
    calculate: (state, action) => {
      const { operator, value1, value2 } = action.payload;
      state.result = calculateResult(operator, value1, value2);
    },
    reset: (state) => {
      state.result = null;
    },
  },
});