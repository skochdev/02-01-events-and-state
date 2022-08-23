import styled from 'styled-components/macro';

export const Form = styled.form`
  font-size: ${p => p.theme.fontSizes.s};

  label {
    display: flex;
    margin-right: auto;
    justify-content: space-between;
  }

  label > input {
    margin-left: 20px;
  }
`;
