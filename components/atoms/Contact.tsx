interface ContactProps {
  type: string;
  isActive: boolean;
}

const Contact: React.FC<ContactProps> = ({ type, isActive }) => {
  return (
    <div>
      <span>{type} - </span>
      <span>{isActive ? 'true' : 'false'}</span>
    </div>
  );
};

export default Contact;
