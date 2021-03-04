import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  person = {
    firstname: {
      label: 'Firstname',
      value: 'Artur',
      type: 'text',
      validators: {
        required: true
      }
    },
    age: {
      label: 'Age',
      value: 29,
      type: 'number',
      validators: {
        min: 18
      }
    },
    gender: {
      label: 'Gender',
      value: 'F',
      type: 'radio',
      options: [
        {label: 'Male', value: 'M'},
        {label: 'Female', value: 'F'},
      ]
    },
    city: {
      label: 'City',
      value: 'Yerevan',
      type: 'select',
      options: [
        {label: '(choose one)', value: ''},
        {label: 'Yerevan', value: 'YV'},
        {label: 'Stepanakert', value: 'STP'},
        {label: 'Gyumri', value: 'GMR'}
      ]
    }
  };
}
