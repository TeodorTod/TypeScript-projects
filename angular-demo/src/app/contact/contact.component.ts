import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IDActivateComponent } from '../Services/candeactivate-guard.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  {
  title = 'AngularForms';
  defaultCountry = 'india';

  firstname:string = '';
  lastname:string = '';
  email: string = '';
  gen:string = '';
  country: string = '';

  defaultGender = 'Female';

  gender = [
    {id: '1', value: 'Male'},
    {id: '2', value: 'Female'},
    {id: '3', value: 'Other'}
  ]
  
  @ViewChild('myForm') form: any = NgForm;

  onSubmit(form: NgForm){
    console.log(form);
    
  }

  setDefaultValues(){
    // this.form.value.personDetails.firstname = 'John';
    // this.form.value.personDetails.lastname = 'smith';
    // this.form.value.personDetails.email = 'abc@example.com';
    // this.form.setValue({
    //   country: '',
    //   gender: '',
    //   hobbies: '',
    //   personDetails: {
    //     firstname: 'John',
    //     lastname: 'Smith',
    //     email: 'abc@example.com'
    //   }
    // })

    this.form.form.patchValue({
      personDetails: {
         firstname: 'John',
         lastname: 'Smith',
         email: 'abc@example.com'
      }
    })
  }
}
