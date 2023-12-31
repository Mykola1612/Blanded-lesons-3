import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FiSearch } from 'react-icons/fi';

import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

import { addTodo } from 'redux/todoSlice';
import { nanoid } from 'nanoid';

export const SearchForm = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  const handleInput = e => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const todo = {text: query, id: nanoid()}
    dispatch(addTodo(todo));

    setQuery('');
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        onChange={handleInput}
        placeholder="What do you want to write?"
        name="search"
        required
        value={query}
        autoFocus
      />
    </SearchFormStyled>
  );
};
