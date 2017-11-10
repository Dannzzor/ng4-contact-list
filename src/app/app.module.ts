import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MdCardModule, MdInputModule, MdButtonModule, MdDialogModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { contactReducer } from './reducers/contact.reducer';
import { NewContactComponent } from './components/new-contact/new-contact.component';

import { ContactService } from './services/contact.service';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    NewContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    StoreModule.provideStore({contact: contactReducer}),
    MdCardModule,
    MdButtonModule,
    MdDialogModule,
    MdToolbarModule,
    MdInputModule
  ],
  entryComponents: [NewContactComponent],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
