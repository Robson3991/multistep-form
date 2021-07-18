import styled from 'styled-components';
import Button from 'components/atoms/Button';

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
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;

  padding-right: 60px;
  border-right: 1px solid var(--color-grey);
`;

export const Contacts = styled.div`
  flex-shrink: 0;
  margin-left: 70px;
`;

export const Description = styled.p`
  margin: 40px auto 0;
  max-width: 550px;
  text-align: center;
`;

export const ProfileButton = styled(Button)`
  margin: 60px auto -80px;
`;
