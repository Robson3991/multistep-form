import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Price = styled.p`
  max-width: 110px;
  margin-bottom: 60px;
  text-align: right;
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Name = styled.h2`
  margin-bottom: 10px;
  font-size: 2rem;
  font-weight: 700;
`;

export const Skills = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

export const Diseases = styled.div`
  padding-right: 100px;
  border-right: 1px solid var(--color-grey);
`;
