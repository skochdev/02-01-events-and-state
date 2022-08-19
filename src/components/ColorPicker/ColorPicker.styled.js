import styled from 'styled-components/macro';
export const ColorPicker = styled.div`
  width: 400px;
  padding: 10px;
  border: 1px solid black;
`;

export const ColorPickerTitle = styled.h2`
  line-height: 1.3;
`;

export const ColorPickerOption = styled.button`
  display: inline-block;
  width: 40px;
  height: 40px;
  margin: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: transform 250ms linear;
  transform: ${p => (p.applyActiveStyle ? 'scale(1.2)' : 'scale(1)')};
`;
