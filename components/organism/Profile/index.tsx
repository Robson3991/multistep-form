import RoundedPhoto from 'components/atoms/RoundedPhoto';
import {
  Header,
  Price,
  HeaderInfo,
  Name,
  Skills,
  Diseases,
  Contacts,
  Description,
  ProfileButton,
} from './profile.style';
import Wrapper from 'components/atoms/Wrapper';
import Tag from 'components/atoms/Tag';
import { ContactsT } from 'types';
import Contact from 'components/atoms/Contact';

interface ProfileProps {
  price: number;
  name: string;
  profession: string;
  diseases: string[];
  description: string;
  contacts: ContactsT;
}

const Profile: React.FC<ProfileProps> = ({
  price,
  name,
  profession,
  diseases,
  description,
  contacts,
}) => {
  return (
    <Wrapper>
      <Header>
        <RoundedPhoto />
        <HeaderInfo>
          <Price>{`from ${price}$ per session`}</Price>
          <Name>{name}</Name>
          {profession}
        </HeaderInfo>
      </Header>
      <Skills>
        <Diseases>
          {diseases.map((disease) => (
            <Tag>{disease}</Tag>
          ))}
        </Diseases>
        <Contacts>
          {contacts.map(({ type, active }) => (
            <Contact isActive={active} type={type} />
          ))}
        </Contacts>
      </Skills>
      <Description>{description}</Description>
      <ProfileButton light>View profile</ProfileButton>
    </Wrapper>
  );
};

export default Profile;
