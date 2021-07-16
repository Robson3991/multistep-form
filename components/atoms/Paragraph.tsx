import styled from 'styled-components';

interface ParagraphProps {
  isError?: boolean;
}

const Paragraph = styled.p<ParagraphProps>`
  font-size: 1.6rem;
  line-height: 1.6;

  ${({ isError }) => isError && `color: var(--color-error)`};
`;

export default Paragraph;
