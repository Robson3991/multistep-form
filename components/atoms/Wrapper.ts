import styled from 'styled-components';

interface WrapperProps {
  bordered?: boolean;
  centered?: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  ${({ centered }) =>
    centered &&
    `
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
  `}
  background: var(--color-white);
  width: 100%;
  max-width: 900px;
  min-height: 400px;
  padding: 50px;
  box-shadow: 0px 0px 12px 2px rgba(var(--color-black-rgb), 0.15);
  border-radius: 5px;

  ${({ bordered }) =>
    bordered && `border: 2px solid var(--color-primary-light)`};

  h2 {
    text-align: center;
    max-width: 450px;
  }
`;

export default Wrapper;
