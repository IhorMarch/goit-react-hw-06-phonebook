import { List,Item } from './ContactList.styled';
// Импортируем хук
import { useSelector } from "react-redux";



export const ContactList = () => {
  
// Получаем массив задач из состояния Redux
  const contacts = useSelector(state => state.tasks);

  
// Вычисляем массив задач которые необходимо отображать в интерфейсе

  return (
    
     <List>
    {contacts.map(contact => (
      <Item key={contact.id}>
        {contact.name + ' : ' + contact.number}
        <button type='button'>Delete</button>
      </Item>
    
    ))}
    </List>
  )



}
  
 
 
  

