import styled from 'styled-components';

interface ButtonProps {
  light?: boolean;
  prev?: boolean;
}

const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  min-width: 160px;
  border: 0;
  font-size: 1.6rem;
  text-transform: uppercase;
  color: var(--color-white);
  cursor: pointer;
  background-color: ${({ light }) =>
    light ? `var(--color-primary-light)` : `var(--color-primary)`};
  transition: background-color var(--transition);

  &:hover {
    background-color: ${({ light }) =>
      light ? `var(--color-primary)` : `var(--color-primary-light)`};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: var(--color-darkgrey);
  }

  ${({ prev }) =>
    prev &&
    `
      &:before {
        content: '<<';
        margin-right: 8px;
      }
  `}
`;

export default Button;
