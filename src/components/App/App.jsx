import { useSelector } from 'react-redux';

import {
  Header,
  Section,
  Container,
  SearchForm,
  Text,
  Filter,
  TodoList,
} from 'components';

import { getTodos } from 'redux/selectors';

export const App = () => {
  const todos = useSelector(getTodos);

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />

          {todos.length === 0 ? (
            <Text textAlign="center">There are no any todos ... </Text>
          ) : (
            <>
              <Filter />
              <TodoList />
            </>
          )}
        </Container>
      </Section>
    </>
  );
};
