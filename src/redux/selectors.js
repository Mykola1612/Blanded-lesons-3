import { createSelector } from '@reduxjs/toolkit';

export const getTodos = state => state.todos;

export const getFilter = state => state.filter;

export const selectFilteredTodos = createSelector(
  // Масив вхідних селекторів
  [getTodos, getFilter],
  // Функція перетворювач
  (todos, filter) => {
    // Виконуємо обчислення та повертаємо результат
    const formattedFilter = filter.toLowerCase();
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(formattedFilter)
    );
  }
);
