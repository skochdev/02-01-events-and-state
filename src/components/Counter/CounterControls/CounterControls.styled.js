import styled from 'styled-components/macro';

export const Button = styled.button`
  padding: ${p => p.theme.space[3]}px;
  min-width: 100px;

  & + & {
    margin-left: 1rem;
  }
`;
