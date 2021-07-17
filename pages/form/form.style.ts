import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

interface WrapperProps {
  bordered: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--color-white);
  width: 100%;
  max-width: 900px;
  min-height: 400px;
  padding: 50px 80px;
  box-shadow: 0px 0px 12px 2px rgba(var(--color-black-rgb), 0.15);
  border-radius: 5px;

  ${({ bordered }) => bordered && `border: 2px solid var(--color-primary-light)`};
  
  h2 {
    text-align: center;
    max-width: 450px;
  }
`;

interface OptionsProps {
  columns?: boolean;
}

export const Options = styled.div<OptionsProps>`
  margin-top: 40px;
  width: 100%;
  overflow: scroll;

  ${({ columns }) => columns && `
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