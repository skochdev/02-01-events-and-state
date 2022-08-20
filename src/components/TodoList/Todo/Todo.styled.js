import styled from 'styled-components/macro';

export const Todo = styled.li`
  font-weight: ${p => p.theme.fontWeights[3]};
`;

export const RemoveTodoBtn = styled.button`
  border: none;
  border-radius: ${p => p.theme.radii.round};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
