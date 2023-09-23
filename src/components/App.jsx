import { useEffect, useState } from 'react';
import { GlobalStyle } from './GlobalStyles';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import Notiflix from 'notiflix';


const getIntiaContacts = () => {
const savedContacts = localStorage.getItem('savedContacts');
if (savedContacts !== null) {
return JSON.parse(savedContacts);
}
return [
    { "id": "id-1", "name": "Rosie Simpson", "number": "459-12-56" },
    { "id": "id-2", "name": "Hermione Kline", "number": "443-89-12" },
    { "id": "id-3", "name": "Eden Clements", "number": "645-17-79" },
    { "id": "id-4", "name": "Annie Copeland", "number": "227-91-26" }
  ]
  
};
 

export const App = () => { 

  const [contacts, setContacts] = useState(getIntiaContacts);
  const [filter, setFilter] = useState('');


 useEffect(() => {
    localStorage.setItem('savedContacts', JSON.stringify(contacts));
  }, [contacts]);


  const addContact = newContact => {
 
    const {name} = newContact;

    if (contacts.find(newContact => newContact.name.toLowerCase() === name.toLowerCase())) {
      Notiflix.Notify.failure(`${newContact.name} is already in contacts`);
    }
    else { 

    setContacts(prevContacts=> 
    [...prevContacts, newContact] 
    );
  }
  };


  const changeFilter = evt => {
  
    setFilter(evt.target.value);
  };


  const getVisibleContacts = () => { 

  
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(normalizedFilter)
      );

  };

  
const deleteContact = contactId => {
   setContacts(contacts.filter(contact => contact.id !== contactId));
  };


    const visibleContacts = getVisibleContacts();

  

  return (
        <div>
     <Section title="Phonebook">
          <ContactForm
            onAdd={addContact}
            />
          </Section>

          <Section title="Contacts">


              <Filter value={filter} onChangeFilter={changeFilter} />
              
        
           <ContactList
            contacts={visibleContacts}
            onDelete ={deleteContact}
              />
              
         </Section>
          <GlobalStyle />
        </div>
      );

}

 