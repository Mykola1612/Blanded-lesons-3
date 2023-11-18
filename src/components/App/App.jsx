import { useSelector } from 'react-redux';

import { Container, Header, SearchForm, Section, Text } from 'components';
import { TodoList } from 'components/TodoList/TodoList';
import { getTodos } from 'redux/selectors';
import { Filter } from 'components/Filter/Filter';

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
