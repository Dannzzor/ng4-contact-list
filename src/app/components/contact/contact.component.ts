import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../../models/app-state.model';
import { Contact } from '../../models/contact.model';
import { ACTIONS } from '../../reducers/contact.reducer';
import { ContactService } from '../../services/contact.service';

import { NewContactComponent } from '../new-contact/new-contact.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts: Observable<Contact[]>;

  constructor(
    private store: Store<AppState>,
    private contactService: ContactService,
    public dialog: MdDialog
  ) {
    this.contacts = this.store.select(state => state.contact);
  }

  ngOnInit() {
    this.loadContacts()
  }

  loadContacts() {
    this.contactService.getContacts().subscribe(contacts => {
      return this.store.dispatch({
        type: ACTIONS.LOAD_CONTACTS,
        payload: contacts
      })
    });
  }

  openDialog() {
    this.dialog.open(NewContactComponent);
  }

  removeContact(contact: Contact) {
    this.store.dispatch({
      type: ACTIONS.REMOVE_CONTACT,
      payload: contact
    });
  }
}
