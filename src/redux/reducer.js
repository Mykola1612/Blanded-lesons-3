import { combineReducers } from 'redux';

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'todos/addTodo':
      return [...state, action.payload];
    case 'todos/deleteTodo':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};

export const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'filter/setFilter':
      return action.payload;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer,
});
