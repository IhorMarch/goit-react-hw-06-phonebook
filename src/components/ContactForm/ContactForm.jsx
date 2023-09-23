
import React from 'react';
import { nanoid } from 'nanoid';
import { Form, Label, Button, Input} from './ContactForm.styled';
import { useState } from 'react';

const INITIAL_STATE = {
    name: '',
    number: '',
};


export const ContactForm = ({onAdd}) => { 
   const [state, setState] = useState(INITIAL_STATE);


    
    const handleSubmit = event => {
        event.preventDefault();
        const { name, number } = state;
        const id = nanoid();
        onAdd({id,name,number});
        reset();
    }
    const reset = () => {
         
          setState(INITIAL_STATE);
          
       }; 


    const handleChange = event => {
    const { name, value } = event.target;
        setState(prevState =>{
            return { ...prevState, [name]: value };

        })
            
        
    };

return (
            <Form onSubmit={handleSubmit}>
                <Label>
                    Name
                <Input
                    type="text"
                    name="name"
                    value={state.name}
                    onChange={handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    /></Label>
                
                <Label>
                    Number
               <Input
               type="tel"
               name="number"
               value={state.number}
               onChange={handleChange}
               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
               required
                    />
                </Label>


                <Button type="submit">Add contact</Button>
            </Form>
        );


}
