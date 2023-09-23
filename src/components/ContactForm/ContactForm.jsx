
import React from 'react';
import { nanoid } from 'nanoid';
import { Form, Label, Button, Input} from './ContactForm.styled';
import { useState } from 'react';
// Импортируем хук
import { useDispatch } from "react-redux";
// Импортируем генератор экшена
import { addTask } from "../../redux/actions";

const INITIAL_STATE = {
    name: '',
    number: '',
};


export const ContactForm = () => { 

   // Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch();



    
    const handleSubmit = event => {
        event.preventDefault();
      const form = event.target;

        console.dir(form.elements);
    // Вызываем генератор экшена и передаем текст задачи для поля payload
    // Отправляем результат - экшен создания задачи
    dispatch(addTask(form.elements.text.value));

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
{/*                 
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
                </Label> */}


                <Button type="submit">Add contact</Button>
            </Form>
        );


}
