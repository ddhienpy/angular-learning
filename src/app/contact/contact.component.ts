import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { invalidEmailDomainValidator } from './invalidEmailDomain';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm = new FormGroup({
    senderName: new FormControl('', Validators.required),
    senderEmail: new FormControl('', [Validators.required, Validators.email, invalidEmailDomainValidator()]),
    senderMessage: new FormControl('', [Validators.required, Validators.minLength(10)]),
  })

  

  submitForm() {
    console.log(this.contactForm.valid)
    // if (this.senderNameControl.dirty) {
    //   alert('name has changed')
    // }
  }
}
