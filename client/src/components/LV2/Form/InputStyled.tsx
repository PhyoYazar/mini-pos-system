import styled from 'styled-components';

export const InputStyled = styled.input`
  width: 300px;
  padding: 6px 10px;
  font-size: ${({ theme }) => theme.fontSize.md}px;

  border: 1.5px solid ${({ theme }) => theme.colors.neutral300};
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  color: ${({ theme }) => theme.colors.neutral600};

  /* transition: all 0.1s; */

  &:active,
  &:focus {
    outline: none;
  }
`;
