import { useDispatch } from "react-redux";
import { MdClose } from "react-icons/md";
import { deleteContacts } from "../../redux/contactsSlice";
import { Wrapper,Text, Button} from './Contact.styled';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContacts(contact.id));


  return (
    <Wrapper >
    <Text> {contact.name + ' : ' + contact.number}</Text>
      <Button onClick={handleDelete}>
        <MdClose size={24} />
      </Button>
    </Wrapper>
  );
};
