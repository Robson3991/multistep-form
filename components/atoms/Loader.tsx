import styled from 'styled-components';

const Image = styled.img`
  height: 230px;
`;

const Loader = ({ ...props }) => <Image src="/loader.gif" {...props} />;

export default Loader;
