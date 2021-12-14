import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss'],
})
export class ReactiveComponent implements OnInit {
  public sizes: string[] = ['Small', 'Medium', 'Large'];

  //FormControls
  profileForm = this.fb.group(
    {
      vorname: new FormControl('keine Zahlen, nur -', [
        Validators.pattern('[-a-zA-Z ]*'),
        Validators.required,
      ]), //['keine Zahlen, nur -', [Validators.pattern('[-a-zA-Z ]*'), Validators.required]],
      nachname: [
        'keine Zahlen, nur -',
        [Validators.pattern('[-a-zA-Z ]*'), Validators.required],
      ],
      street1: ['required', Validators.required],
      postcode1: [
        '4 zahlen',
        [Validators.required, Validators.pattern('[0-9]{4}')],
      ],
      location1: [
        'keine zahlen',
        [Validators.required, Validators.pattern('[A-Za-z]*')],
      ],
      size: ['', Validators.required],
      street2: ['', [Validators.required]],
      postcode2: ['', [Validators.required, Validators.pattern('[0-9]{4}')]],
      location2: [
        'keine zahlen',
        [Validators.required, Validators.pattern('[A-Za-z]*')],
      ],
      password1: ['', Validators.required],
      password2: ['', Validators.required],
      email: ['', Validators.required],
    },
    { validators: this.passwordValidation() }
  );

  get vorname() {
    return this.profileForm.get('vorname');
  }

  get nachname() {
    return this.profileForm.get('nachname');
  }

  get street1() {
    return this.profileForm.get('street1');
  }

  get postcode1() {
    return this.profileForm.get('postcode1');
  }

  get location1() {
    return this.profileForm.get('location1');
  }

  get size() {
    return this.profileForm.get('size');
  }

  get street2() {
    return this.profileForm.get('street2');
  }

  get postcode2() {
    return this.profileForm.get('postcode2');
  }
  get location2() {
    return this.profileForm.get('location2');
  }

  get password1() {
    return this.profileForm.get('password1');
  }

  get password2() {
    return this.profileForm.get('password2');
  }

  get email() {
    return this.profileForm.get('email');
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log(this.vorname?.valid);
  }

  /** Validation when passwords dont match */
  private passwordValidation() {
    return (form: FormGroup) => {
      const password1 = form.get('password1');
      const password2 = form.get('password2');
      const error =
        password1?.value !== password2?.value
          ? { passwordsDontMatch: true }
          : null;
      password1?.setErrors(error); //<--see the setErrors
      password2?.setErrors(error); //<--see the setErrors
      return error;
    };
  }
}
