import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 8px 0;
`;

interface ContactProps {
  type: string;
  isActive: boolean;
}

const Contact: React.FC<ContactProps> = ({ type, isActive }) => {
  return (
    <Wrapper>
      <span>{type} - </span>
      <span>{isActive ? 'true' : 'false'}</span>
    </Wrapper>
  );
};

export default Contact;
