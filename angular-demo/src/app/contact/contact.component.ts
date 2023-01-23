import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit  {

  reactiveForm: FormGroup;

  defaultGender = 'Male';

  gender = [
    {id: '1', value: 'Male'},
    {id: '2', value: 'Female'},
    {id: '3', value: 'Other'}
  ]

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      firstname: new FormControl(null),
      lastname: new FormControl(null),
      email: new FormControl(null),
      country: new FormControl('bulgaria'),
      gender: new FormControl('male'),
      hobbies: new FormControl(null),
    });
  }

  onSubmit() {
    console.log(this.reactiveForm);
    
  }

}
