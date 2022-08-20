import { Box } from '../../Box/Box';
import { AiOutlineFileDone } from 'react-icons/ai';
import * as S from './Todo.styled';

export const Todo = ({ id, description, isCompleted, onRemoveTodo }) => {
  return (
    <>
      <Box
        as={S.Todo}
        display="flex"
        justifyContent="space-between"
        alignItems="center">
        <p>{description}</p>
        <Box as={S.RemoveTodoBtn} p={3} onClick={() => onRemoveTodo(id)}>
          <Box as={AiOutlineFileDone} />
        </Box>
      </Box>
    </>
  );
};
