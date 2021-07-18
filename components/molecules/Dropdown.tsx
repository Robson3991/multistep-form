import styled from 'styled-components';
import { useState } from 'react';
import ArrowDown from 'components/atoms/icons/ArrowDown';

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0 10px 10px;
  font-weight: 700;
  font-size: 1.6rem;
  color: var(--color-primary-light);
  cursor: pointer;
  border-bottom: 2px solid var(--color-primary-light);
  user-select: none;
`;

const Options = styled.div`
  position: absolute;
  top: calc(100% + 20px);
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: var(--color-lightgrey);
  border: 1px solid var(--color-primary-light);
`;

const Option = styled.span`
  padding: 10px 20px;
  color: var(--color-darkgrey);
  cursor: pointer;
  transition: color var(--transition), background-color var(--transition);

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-primary-light);
  }

  &:hover {
    color: var(--color-white);
    background-color: var(--color-primary-light);
  }
`;

const Arrow = styled(ArrowDown)`
  fill: var(--color-primary-light);
  width: 15px;
  margin-left: 20px;
`;

interface DropdownProps {
  options: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [active, setActive] = useState(false);
  const [activeOption, setActiveOption] = useState(options[0]);

  const handleSelectClick = () => setActive((prevState) => !prevState);
  const handleOptionClick = (option: string) => {
    setActiveOption(option);
    setActive(false);
  };

  return (
    <Wrapper>
      <Header onClick={handleSelectClick}>
        {activeOption}
        <Arrow />
      </Header>
      {active && (
        <Options>
          {options.map((option) => (
            <Option onClick={() => handleOptionClick(option)}>{option}</Option>
          ))}
        </Options>
      )}
    </Wrapper>
  );
};

export default Dropdown;
