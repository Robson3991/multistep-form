import styled from 'styled-components';

interface OptionsProps {
  columns?: boolean;
}

export const Options = styled.div<OptionsProps>`
  margin-top: 40px;
  width: 100%;
  overflow: scroll;

  ${({ columns }) =>
    columns &&
    `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0 60px;
  `}
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  button {
    margin: 0 10px;
  }
`;
