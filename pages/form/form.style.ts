import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--color-white);
    width: 100%;
    max-width: 900px;
    min-height: 300px;
    padding: 50px 30px;
    box-shadow: 0px 0px 12px 2px rgba(var(--color-black-rgb), 0.15);
    border-radius: 5px;
    
    h2 {
        text-align: center;
        max-width: 450px;
    }
`;

export const Options = styled.div`
    margin-top: 4rem;
    width: 100%;
`;