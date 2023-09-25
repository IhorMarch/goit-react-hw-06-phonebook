import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import {  persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const contactsInitialState = 
 {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};



const contactsSlice = createSlice({
    name: "contacts",
  initialState: contactsInitialState,
    reducers: {
        addContacts: {
            reducer(state, action) {
                state.items.push(action.payload);
            },
            prepare(newContact) {
                return {
                    payload: {
                        id: nanoid(),
                        name: newContact.name,
                        number: newContact.number,
                    },
                };
            },
        },
      
        deleteContacts(state, action) {
            const index = state.items.findIndex(contact => contact.id === action.payload);
            state.items.splice(index, 1);
        },
    }
    

})


const persistConfig = {
  key: 'root',
  storage,
}



// Экспортируем генераторы экшенов и редюсер
export const { addContacts, deleteContacts} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const reducerContacts = persistReducer(persistConfig, contactsReducer)