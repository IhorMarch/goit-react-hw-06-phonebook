import { addContacts, deleteContacts, setStatusFilter } from "./actions";

import { createReducer } from "@reduxjs/toolkit";

const contactsInitialState = [
  { "id": "id-1", "name": "Rosie Simpson", "number": "459-12-56" },
  { "id": "id-2", "name": "Hermione Kline", "number": "443-89-12" },
  { "id": "id-3", "name": "Eden Clements", "number": "645-17-79" },
  { "id": "id-4", "name": "Annie Copeland", "number": "227-91-26" }
];
 
export const contactsReducer = createReducer(contactsInitialState, {
  [addContacts]: (state, action) => {state.push(action.payload);},
  [deleteContacts]: (state, action) =>
  {
    const index = state.findIndex(contact => contact.id === action.payload);
    state.splice(index, 1);},

});
const filtersInitialState = ''


export const filterReducer = createReducer(filtersInitialState, {
  [setStatusFilter]: (state, action) => {
       state.filter = action.payload;
  },
});






// // Используем initialState как значение состояния по умолчанию

// export const contactsReducer = (state = contactsInitialState, action) => {
//   // Редюсер различает экшены по значению свойства type
//   switch (action.type) {
//       case addContacts.type:
//       return [...state, action.payload];
          
      
//           case deleteContacts.type:
//       return {
//         ...state,
//         contacts: state.contacts.filter(contact => contact.id !== action.payload),
//       };
   
//     default:
//       // Каждый редюсер получает все экшены отправленные в стор.
//       // Если редюсер не должен обрабатывать какой-то тип экшена,
//       // необходимо вернуть существующее состояние без изменений.
//       return state;
//   }
// };


// const filtersInitialState = ''

// export const filterReducer = (state = filtersInitialState, action) => {
 
//   switch (action.type) {
     
//     case setStatusFilter.type:
//       return {
//         ...state,
//         filter: action.payload,
//       };

//     default:
    
//       return state;
//   }
// };

// // export const rootReducer = (state = {}, action) => {
// //   // Возвращаем объект состояния
// //   return {
// //     // Обоим редюсерам передаем только часть состояния за которую они отвечают
// //     contacts: contactsReducer(state.contacts, action),
// //     filter: filterReducer(state.filter, action),
// //   };
// // };