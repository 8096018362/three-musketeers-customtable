import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  public validateForm(form: FormGroup): void {
    const self = this;
    Object.keys(form.controls).forEach((field) => {
      const control = form.get(field);
      if (control instanceof FormControl) {
        control.markAllAsTouched();
      } else if (control instanceof FormGroup) {
        self.validateForm(control);
      } else if (control instanceof FormArray) {
        const array = control as FormArray;
        array.controls.forEach((c) => {
          if (c instanceof FormControl) {
            control.markAllAsTouched();
          } else if (c instanceof FormGroup) {
            self.validateForm(c);
          }
        });
      }
    });
  }
}
