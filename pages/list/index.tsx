import Dropdown from 'components/molecules/Dropdown';
import { Header, Config, ConfigTitle } from './list.style';
import Profile from 'components/organism/Profile';
import { ContactsT } from 'types';

const selectOptions = ['Recommended', 'Lower price', 'Highest price'];

const contacts: ContactsT = [
  {
    type: 'Video',
    active: true,
  },
  {
    type: 'Phone',
    active: true,
  },
  {
    type: 'Chat',
    active: true,
  },
];

const diseases = ['Depression', 'Borderline', 'Lorem ipsum', 'Dolor sit amet'];

export default function () {
  return (
    <Header>
      <h1>List of therapists</h1>
      <Config>
        <ConfigTitle>Sort by:</ConfigTitle>
        <Dropdown options={selectOptions} />
      </Config>
      <Profile
        name="dr. Alexandra Stevens-Schlotterbeck"
        contacts={contacts}
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci nihil illo error, eos temporibus ratione!"
        diseases={diseases}
        price={20}
        profession="Psychologist"
      />
    </Header>
  );
}
