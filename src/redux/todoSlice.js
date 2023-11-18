import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  // Ім'я слайсу
  name: "Todo",
  // Початковий стан редюсера слайсу
  initialState: [],
  // Об'єкт редюсерів
  reducers: {
    addTodo(state, action) {  return [...state, action.payload]},
    deleteTodo(state, action) { return state.filter(todo => todo.id !== action.payload)},
  },
});

// Генератори екшенів
export const { addTodo, deleteTodo } = todoSlice.actions;
// Редюсер слайсу
export const todoReducer = todoSlice.reducer;