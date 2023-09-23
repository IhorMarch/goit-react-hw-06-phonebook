
import React from 'react';
import { nanoid } from 'nanoid';
import { Form, Label, Button, Input} from './ContactForm.styled';

export class ContactForm extends React.Component {
    state = {
    name: '',
    number: '',
    };
    

    handleSubmit = event => {
        event.preventDefault();
        const { name, number } = this.state;
        const id = nanoid();
        this.props.onAdd({id,name,number});
        this.reset();
    }
      reset = () => {
    this.setState({ number: '', name: '' });
       }; 

    handleChange = event => {
    const { name, value } = event.target;
        this.setState({ [name]: value, });
    };
    

    render() {
    
        return (
            <Form onSubmit={this.handleSubmit}>
                <Label>
                    Name
                <Input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    /></Label>
                
                <Label>
                    Number
               <Input
               type="tel"
               name="number"
               value={this.state.number}
               onChange={this.handleChange}
               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
               required
                    />
                </Label>


                <Button type="submit">Add contact</Button>
            </Form>
        );
    }
};


