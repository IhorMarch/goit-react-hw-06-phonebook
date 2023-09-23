import { List,Item } from './ContactList.styled';


export const ContactList = ({ contacts, onDelete }) => (
  
 
  <List>
    {contacts.map(contact => (
      <Item key={contact.id}>
        {contact.name + ' : ' + contact.number}
        <button type='button' onClick={() => onDelete(contact.id)}>Delete</button>
      </Item>
    
    ))}
    </List>
  
);
