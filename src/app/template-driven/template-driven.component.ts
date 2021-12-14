import { Component, ViewChild } from '@angular/core';
import {
  AbstractControl,
  NgForm,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { Adress, Person } from '../models';

@Component({
  selector: 'template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss'],
})
export class TemplateDrivenComponent {
  //TODO: Kommentar fehlt
  @ViewChild('form')
  public form: NgForm;

  //TODO: Kommentar fehlt
  public submitted = false;
  //TODO: Kommentar fehlt
  public sameAdress: Boolean = false;
  //TODO: Kommentar fehlt
  public secondAdress: Adress = {
    street: 'Bernstrasse 5',
    postCode: '3072',
    location: 'Ostermundigen',
  };
  //TODO: Kommentar fehlt
  public sizes: string[] = ['Small', 'Medium', 'Large'];

  //passwörter
  public pw1: string = '';
  //TODO: Kommentar fehlt
  public pw2: string = '';

  //TODO: Kommentar fehlt
  public modelFilled: Person = new Person(
    'von Wartburg',
    'Gian',
    {
      street: 'Wiesenstrasse',
      postCode: '3014',
      location: 'Bern',
    },
    '',
    'gianvonwartburg@gmail.com',
    '',
    ''
  );

  constructor() {}

  //TODO: Docstring fehlt
  public onSubmit(): void {
    this.submitted = true;
  }

  //TODO: Docstring fehlt
  public onCheck(): void {
    this.sameAdress = !this.sameAdress;
  }

  //TODO: Docstring fehlt
  public comparePasswords() {
    if (this.pw2 === this.modelFilled.password) {
      console.log('hallo');
      return;
    } else {
      console.log('hallo2');

      this.form.form.controls['passwort'].setErrors({ incorrect: true });
      this.form.form.controls['passwort2'].setErrors({ incorrect: true });
    }
  }
}
