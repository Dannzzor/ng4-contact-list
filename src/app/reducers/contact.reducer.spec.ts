import { Contact } from '../models/contact.model';
import { contactReducer } from './contact.reducer';



describe('Contact Reducer', () => {
  it('should add a contact to the list', () => {
    const initialState: Contact[] = [];
  
    const contactAction = {
      type: 'ADD_CONTACT',
      payload: <Contact>{
        id: 1,
        name: 'Bilbo Baggins',
        email: 'Bilbo@example.com'
      }
    }

    const changedState: Contact[] = contactReducer(initialState, contactAction);

    expect(initialState.length).toBeLessThan(changedState.length);
  });

  it('should delete a contact from the list', () => {
    const initialState: Contact[] = [
      <Contact>{
        id: 1,
        name: 'Bilbo Baggins',
        email: 'Bilbo@example.com'
      },
      <Contact>{
        id: 2,
        name: 'Frodo Baggins',
        email: 'Frodo@example.com'
      }
    ];
  
    const contactAction = {
      type: 'REMOVE_CONTACT',
      payload: <Contact>{
        id: 1,
        name: 'Bilbo Baggins',
        email: 'Bilbo@example.com'
      }
    }

    const changedState: Contact[] = contactReducer(initialState, contactAction);

    // test that it deleted something
    expect(initialState.length).toBeGreaterThan(changedState.length);
    // test that it deleted the right something
    expect(changedState[0].id).toBe(2);
  });
  
  it('should update a contact from the list', () => {
    const initialState: Contact[] = [
      <Contact>{
        id: 1,
        name: 'Bilbo Baggins',
        email: 'Bilbo@example.com'
      },
      <Contact>{
        id: 2,
        name: 'Frodo Baggins',
        email: 'Frodo@example.com'
      }
    ];
  
    const contactAction = {
      type: 'UPDATE_CONTACT',
      payload: <Contact>{
        id: 1,
        name: 'Bilbo Baggins',
        email: 'BilboBaggins@example.com' // <<< updated the email address
      }
    }

    const changedState: Contact[] = contactReducer(initialState, contactAction);

    expect(changedState.find(contact => contact.email === 'BilboBaggins@example.com')).toBeTruthy();
  });
});
