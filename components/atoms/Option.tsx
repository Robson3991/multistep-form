import styled, { css } from 'styled-components';
import Check from 'components/atoms/icons/Check';

const Container = styled.label`
  display: block;
  position: relative;
  width: 100%;
  max-width: 400px;
  padding: 10px 35px 10px 0;
  margin: 0 auto;
  cursor: pointer;
  font-size: 22px;
  user-select: none;

  &:not(:last-child) {
    border-bottom: 2px solid var(--color-grey);
  }
`;

interface InputProp {
  type: 'checkbox' | 'radio';
}

const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

const RadioStyle = css`
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
`;

const Checkmark = styled.span<InputProp>`
  position: absolute;
  top: 50%;
  right: 0;
  height: 30px;
  width: 30px;
  border: 3px solid var(--color-primary-light);
  padding: 5px;
  transform: translateY(-50%);
  transition: background-color var(--transition), border-color var(--transition);

  ${({ type }) => type == 'radio' && RadioStyle}

  ${Container} ${Input}:checked ~ & {
    border-color: var(--color-secondary);
  }

  ${Container}:hover ${Input} ~ & {
    background-color: var(--color-grey);
  }
`;

interface RadioButtonProps {
  label: string;
  type: 'radio' | 'checkbox';
  name?: string;
  value: string;
  [x: string]: any;
}

const CheckIcon = styled(Check)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  fill: var(--color-secondary);
  opacity: 0;
  transition: opacity var(--transition);

  ${Container} ${Input}:checked ~ ${Checkmark} & {
    opacity: 1;
  }
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  type = 'radio',
  name,
  value,
  ...rest
}) => (
  <Container>
    {label}
    <Input type={type} name={name} value={value} {...rest} />
    <Checkmark type={type}>{type == 'checkbox' && <CheckIcon />}</Checkmark>
  </Container>
);

export default RadioButton;
