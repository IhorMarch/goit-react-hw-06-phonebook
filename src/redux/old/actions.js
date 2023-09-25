import { nanoid } from "nanoid";
import { createAction } from "@reduxjs/toolkit";


export const addContacts = createAction("contacts/addContacts", newContact => {
  return {
  payload: {
      id: nanoid(),
      name: newContact.name,
      number:newContact.number,
 },
}
  
});
export const deleteContacts = createAction("contacts/deleteContact");
export const setStatusFilter = createAction("filter/setStatusFilter");











// export const addContacts = newContact => {
//   return {
//     type: "contacts/addContacts",
//     payload: {
//       id: nanoid(),
//       name: newContact.name,
//       number:newContact.number,
//     },
//   };
// };
// export const deleteContacts = contactId => {
//   return {
//     type: "contacts/deleteContact",
//     payload: contactId,
//   };
// };


// export const setStatusFilter = value => {
//   return {
//     type: "filter/setStatusFilter",
//     payload: value,
//   };
// };
