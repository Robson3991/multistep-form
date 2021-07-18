import RoundedPhoto from 'components/atoms/RoundedPhoto';
import {
  Header,
  Price,
  HeaderInfo,
  Name,
  Skills,
  Diseases,
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
        <div>
          {contacts.map(({ type, active }) => (
            <Contact isActive={active} type={type} />
          ))}
        </div>
      </Skills>
      <p>{description}</p>
    </Wrapper>
  );
};

export default Profile;
