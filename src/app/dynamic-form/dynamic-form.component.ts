import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() formDataObj;
  form: FormGroup;
  personProps = [];

  ngOnInit(): void {
    this.initializeForms();
  }


  initializeForms(): void {
    const formDataObj = {};
    for (const prop of Object.keys(this.formDataObj)) {
      formDataObj[prop] = new FormControl(this.formDataObj[prop].value, this.mapValidator(this.formDataObj[prop].validators));
      this.personProps.push({
        key: prop,
        label: this.formDataObj[prop].label,
        type: this.formDataObj[prop].type,
        options: this.formDataObj[prop].options,
      });
    }
    this.form = new FormGroup(formDataObj);
  }

  mapValidator(validators): any {
    if (validators) {
      return Object.keys(validators).map(validationType => {
        if (validationType === 'required') {
          return Validators.required;
        } else if (validationType === 'min') {
          return Validators.min(+validators[validationType]);
        }
      });
    } else {
      return [];
    }
  }

  sendObj(): void {
    console.log(this.form.value);
  }
}
