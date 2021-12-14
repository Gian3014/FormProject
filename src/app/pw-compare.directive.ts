import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[PwCompare]'
  // providers: [{provide: NG_VALIDATORS, multi: true}]
})
export class PwCompareDirective {

  constructor() { }

  // validate(control: AbstractControl): ValidationErrors | null {

  // }

  // export function comparePassword(pw1: string, pw2: string): ValidatorFn {
  //   return (control: AbstractControl): ValidationErrors | null => {
  //     return forbidden ? {forbiddenName: {value: control.value}} : null;
  //   };
  // }

  // return (control: AbstractControl): ValidationErrors | null => {

  //  }
  // }
}
