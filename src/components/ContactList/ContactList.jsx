import { List,Item } from './ContactList.styled';
// Импортируем хук
import { useSelector } from "react-redux";
import { Contact } from '../Contact/Contact';
import { getContacts, getStatusFilter } from "../../redux/selectors";
 

    const getVisibleContacts = (contacts, statusFilter) => { 

    const normalizedFilter = statusFilter.toLowerCase();

    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(normalizedFilter)
      );

  };


export const ContactList = () => {
  
// Получаем массив задач из состояния Redux
  const contacts = useSelector(getContacts);

 
 const statusFilter = useSelector(getStatusFilter);


  const visibleContacts = getVisibleContacts(contacts, statusFilter);

  
// Вычисляем массив задач которые необходимо отображать в интерфейсе

  return (
    
     <List>
    {visibleContacts.map(contact => (
      <Item key={contact.id}>
         <Contact contact={contact} />
      </Item>
    
    ))}
    </List>
  )



}
  
 
 
  

