import { nanoid } from 'nanoid';

export const addTodo = text => {
  return {
    type: 'todos/addTodo',
    payload: {
      id: nanoid(),
      text,
    },
  };
};

export const deleteTodo = todoId => {
  return {
    type: 'todos/deleteTodo',
    payload: todoId,
  };
};

export const setFilter = value => {
  return {
    type: 'filter/setFilter',
    payload: value,
  };
};
