import styled from 'styled-components';

const Container = styled.label`
  display: block;
  position: relative;
  width: 100%;
  max-width: 400px;
  padding-right: 35px;
  margin: 0 auto 12px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

const Checkmark = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  height: 30px;
  width: 30px;
  border: 3px solid var(--color-primary-light);
  padding: 5px;
  transition: background-color var(--transition), border-color var(--transition);

  &:after {
    content: '';
    position: absolute;
    opacity: 0;
    transition: opacity var(--transition);

    ${Container} ${Input}:checked ~ & {
      display: block;
      position: absolute;
      width: auto;
      height: auto;
      top: 4px;
      right: 4px;
      bottom: 4px;
      left: 4px;
      opacity: 1;
      background-color: var(--color-secondary);
    }
  }

  ${Container} ${Input}:checked ~ & {
    border-color: var(--color-secondary);
  }

  ${Container}:hover ${Input} ~ & {
    background-color: var(--color-grey);
  }
`;

interface RadioButtonProps {
  label: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ label }) => (
  <Container>
    {label}
    <Input type="radio" name="radio" />
    <Checkmark />
  </Container>
);

export default RadioButton;
