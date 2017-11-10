import { Action } from '@ngrx/store';
import { Contact } from '../models/contact.model';



export const ACTIONS = {
  ADD_CONTACT: 'ADD_CONTACT',
  LOAD_CONTACTS: 'LOAD_CONTACTS',
  REMOVE_CONTACT: 'REMOVE_CONTACT',
  UPDATE_CONTACT: 'UPDATE_CONTACT',
  GET_CONTACTS: 'GET_CONTACTS'
}

const initialState: Contact[] = [
  <Contact>{
    id: 13,
    name: 'Bilbo Baggins',
    email: 'Bilbo@example.com',
    company: { name: 'Shire Services'},
    phone: '1-707-778-0671'
  },
  <Contact>{
    id: 11,
    name: 'Frodo Baggins',
    email: 'Frodo@example.com',
    company: { name: 'Shire Services'},
    phone: '1-707-778-0671'
  }
]

export function contactReducer(state: Contact[] = initialState, action: Action) {
  switch (action.type) {
    case ACTIONS.ADD_CONTACT:
      return [...state, action.payload];
    case ACTIONS.LOAD_CONTACTS:
      return [...state, ...action.payload];
    case ACTIONS.REMOVE_CONTACT:
      return state.filter(contact => contact.id !== action.payload.id);
    case ACTIONS.UPDATE_CONTACT:
      return state.map(contact => contact.id === action.payload.id ? action.payload : contact);
    default:
      return state;
  }
}

