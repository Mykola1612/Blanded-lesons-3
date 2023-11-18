import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Filter</h3>
      <input
        type="text"
        placeholder="Filter todos"
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </div>
  );
};
