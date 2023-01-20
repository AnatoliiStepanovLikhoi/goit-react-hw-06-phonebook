import { configureStore } from '@reduxjs/toolkit';

import { createAction, createReducer } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const addContact = createAction('contacts/addContact');
export const deleteContact = createAction('contacts/deleteContact');

const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

//Filter

const filterInitialState = '';

export const filterContact = createAction('filter/filterContact');

const filterReducer = createReducer(filterInitialState, {
  [filterContact]: (state, action) => action.payload,
});

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

// console.log(
//   addContact({ id: 'id-5', name: 'Ann Copeland', number: '227-91-26' })
// );
