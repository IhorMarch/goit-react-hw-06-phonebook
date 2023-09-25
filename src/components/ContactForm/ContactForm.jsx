
import React from 'react';
import Notiflix from 'notiflix';
import { Form, Label, Button, Input} from './ContactForm.styled';

// Импортируем хук
import { useDispatch,useSelector } from "react-redux";
// Импортируем генератор экшена
import { addContacts } from "../../redux/contactsSlice";
import { getContacts} from "../../redux/selectors";



export const ContactForm = () => { 

   // Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch();
const contacts = useSelector(getContacts);


    
    const handleSubmit = event => {
        event.preventDefault();
      const form = event.target;

        
    // Вызываем генератор экшена и передаем текст задачи для поля payload
        // Отправляем результат - экшен создания задачи
        
        const newContact = {
            name:form.elements.name.value,
            number:form.elements.number.value
        }
    const {name} = newContact;
     if (contacts.find(newContact => newContact.name.toLowerCase() === name.toLowerCase())) {
      Notiflix.Notify.failure(`${newContact.name} is already in contacts`);
    }
else{ dispatch(addContacts(newContact));}

   

     form.reset();
    }
   



return (
            <Form onSubmit={handleSubmit}>
                <Label>
                    Name
                <Input
                    type="text"
                    name="name"
                    // value=''
                    // onChange={handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    /></Label>
               
           <Label>
             Number
           <Input
               type="tel"
               name="number"
            //    value={state.number}
            //    onChange={handleChange}
               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
               required
                    />
                </Label>


                <Button type="submit">Add contact</Button>
            </Form>
        );


}
