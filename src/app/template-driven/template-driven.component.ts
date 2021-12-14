import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, NgForm, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Adress, Person } from '../models';

@Component({
  selector: 'template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {

  @ViewChild('form')
  public form: NgForm;

  constructor() { }

  public submitted = false;
  public sameAdress: Boolean = false;
  public secondAdress: Adress = {
    street: 'Bernstrasse 5',
    postCode: '3072',
    location: 'Ostermundigen'
  };
  public sizes: string[] = ['Small', 'Medium', 'Large'];

  //passwörter
  public pw1: string = '';
  public pw2: string = '';

  public modelFilled: Person = new Person('von Wartburg', 'Gian',
    {
      street: 'Wiesenstrasse',
      postCode: '3014',
      location: 'Bern'
    }, '', 'gianvonwartburg@gmail.com', '', '');

  ngOnInit(): void {
  }

  public onSubmit(): void {
    this.submitted = true;
  }

  public onCheck(): void {
    this.sameAdress = !this.sameAdress;
  }

  public comparePasswords() {
    if (this.pw2 === this.modelFilled.password) {
      console.log('hallo')
      return;
    } else {
      console.log('hallo2')

      this.form.form.controls['passwort'].setErrors({ 'incorrect': true });
      this.form.form.controls['passwort2'].setErrors({ 'incorrect': true });
    }
  }
}
