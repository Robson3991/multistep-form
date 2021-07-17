import Dropdown from 'components/molecules/Dropdown';
import { Header, Config, ConfigTitle } from './list.style';

const selectOptions = ['Recommended', 'Lower price', 'Highest price'];

export default function () {
  return (
    <Header>
      <h1>List of therapists</h1>
      <Config>
        <ConfigTitle>Sort by:</ConfigTitle>
        <Dropdown options={selectOptions} />
      </Config>
    </Header>
  );
}
