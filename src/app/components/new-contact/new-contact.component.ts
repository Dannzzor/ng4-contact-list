import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { AppState } from '../../models/app-state.model';
import { Contact } from '../../models/contact.model';
import { ACTIONS } from '../../reducers/contact.reducer';



const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
  private id = 25;
  contact = {} as Contact;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)
  ]);

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  addContact() {
    this.store.dispatch({
      type: ACTIONS.ADD_CONTACT,
      payload: <Contact>{
        id: ++ this.id,
        name: this.contact.name,
        email: this.contact.email
      }
    });
  }
}
