import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';

export function dateValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const today = new Date().getTime();
  
      if(!(control && control.value)) {
        return null;
      }
  
      // return null if there's no errors
      return control.value.getTime() > today 
        ? {invalidDate: 'date incorrect' } 
        : null;
    }
  }