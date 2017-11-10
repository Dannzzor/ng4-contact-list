import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


import { Contact } from '../models/contact.model';


@Injectable()
export class ContactService {

  constructor(private http: Http) { }

  getContacts(): Observable<Contact> {
    return this.http.get('https://jsonplaceholder.typicode.com/users').map(res => res.json());
  }
}