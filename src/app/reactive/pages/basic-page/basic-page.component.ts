import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent {

  // public myform: FormGroup = new FormGroup({
  //   price: new FormControl(''),
  //   name: new FormControl(0),
  //   storage: new FormControl(0),
  // });

  public myForm: FormGroup = this.fb.group({
    name: [''],
    price: [0],
    storage: [0],
  })

  constructor( private fb: FormBuilder ){}

  onSave(): void {

    console.log(this.myForm.value);

  }

}
