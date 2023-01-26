import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { dateValidator } from '../utils/validatorCustom';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      birthday: [new Date(), dateValidator()],
      location: this.formBuilder.group({
        adresse: ["", Validators.required]
      })
    })
  }

  submitForm(data: any) {
    console.log( data.get('firstName'), data.get('firstName').hasError('required') )
  }

}
