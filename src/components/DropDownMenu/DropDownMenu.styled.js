import styled from 'styled-components/macro';

export const Dropdown = styled.div`
  position: relative;
  min-width: 300px;
  padding: ${p => p.theme.space[3]}px;
  border: ${p => p.theme.borders[1]};
  border-color: ${p => p.theme.colors.primary};
`;

export const DropDownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 20px;
  text-align: center;
  background-color: ${p => p.theme.colors.accent};
  color: white;
`;
