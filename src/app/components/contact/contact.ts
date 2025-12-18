import { Component, ElementRef, ViewChild } from '@angular/core';
import { IInput } from '../../interfaces/iinput';
import { Field } from "../field/field";

@Component({
  selector: 'app-contact',
  imports: [Field],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  @ViewChild('input') inputElement!: ElementRef;
  inputsData : IInput[] = [
    { labelName: 'Name', inputId: 'name', id:1, type: 'text', placeholder: 'Enter your name' },
    { labelName: 'Email', inputId: 'email', id:2, type: 'email', placeholder: 'Enter your email' },
    { labelName: 'Password', inputId: 'password', id:4, type: 'password', placeholder: 'Enter your password' },    
    { labelName: 'Subject', inputId: 'subject', id:3, type: 'text', placeholder: 'Enter subject' },
  ]
}
