import Dropdown from 'components/molecules/Dropdown';
import { Header, Config } from './list.style';

const selectOptions = ['Recommended', 'Lower price', 'Highest price'];

export default function () {
  return (
    <Header>
      <h1>List of therapists</h1>
      <Config>
        <span>Sort by:</span>
        <Dropdown options={selectOptions} />
      </Config>
    </Header>
  );
}
