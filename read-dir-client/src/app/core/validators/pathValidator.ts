import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function pathValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value?.trim();
    if (!value) {
      return { required: true };
    }
    // Remove surrounding quotes
    const cleaned = value.replace(/^['"]|['"]$/g, '');

    const forbidden = /[<>|"?*]/;
    if (forbidden.test(cleaned)) {
      return { invalidChars: true };
    }

    const unixLike = /^\/([^/\0]+\/?)*$/;
    const windowsLike = /^[a-zA-Z]:(\\[^\\\0]+)*\\?$/;

    if (!unixLike.test(cleaned) && !windowsLike.test(cleaned)) {
      return { invalidFormat: true };
    }

    return null;
  };
}
