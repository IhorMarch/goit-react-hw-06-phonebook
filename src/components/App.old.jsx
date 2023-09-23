import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyles';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import Notiflix from 'notiflix';


export class App extends Component {
  
  
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}],
    
    filter: '',
  }

componentDidMount() {
    const savedContacts = localStorage.getItem('contacts-items');
    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts-items', JSON.stringify(this.state.contacts));
    }
  }



  addContact = newContact => {
    const { contacts } = this.state;
    const { name } = newContact;

    if (contacts.find(newContact => newContact.name.toLowerCase() === name.toLowerCase())) {
      Notiflix.Notify.failure(`${newContact.name} is already in contacts`);
    }
    else { 
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newContact] };
    });
  }
  };



changeFilter = evt => {
    this.setState({ filter: evt.target.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(normalizedFilter)
      );

  };

deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };


  render() {  
    const visibleContacts = this.getVisibleContacts();
    const { filter }  = this.state;
      return (
        <div>
     <Section title="Phonebook">
          <ContactForm
            onAdd={this.addContact}
            />
          </Section>

          <Section title="Contacts">


              <Filter value={filter} onChangeFilter={this.changeFilter} />
              
        
           <ContactList
            contacts={visibleContacts}
            onDelete ={this.deleteContact}
              />
              
         </Section>
          <GlobalStyle />
        </div>
      );
    };
  }

