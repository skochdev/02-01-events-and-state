import { Todo } from './Todo/';
import * as S from './TodoList.styled';
import { Box } from '../Box/Box';

export const TodoList = ({
  data,
  onRemoveTodo,
  totalTodos,
  completedTodos,
}) => {
  return (
    <>
      <Box as="h2" textAlign="center">
        Todos
      </Box>
      {totalTodos > 0 && <p>Todos left: {totalTodos}</p>}
      {completedTodos > 0 && <p>Completed todos: {completedTodos}</p>}
      <S.TodoList>
        {data.map(({ id, description, isCompleted }) => (
          <Todo
            key={id}
            id={id}
            description={description}
            isCompleted={isCompleted}
            onRemoveTodo={onRemoveTodo}
          />
        ))}
      </S.TodoList>
    </>
  );
};
