import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ErrorDialogService } from '../services/error-dialog.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const errorDialogService = inject(ErrorDialogService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let message = 'An unknown error occurred';

      if (error.error instanceof ErrorEvent) {
        // Client-side / network error
        message = `Network error: ${error.error.message}`;
      } else {
        console.log('this error->  ', error, error.error)
        // Server-side error. Try to pull message from backend response first
        if (error.error && typeof error.error === 'object') {
          message = error.error.message;
        } else if (typeof error.error === 'string') {
          message = error.error;
        } else {
          message = `Error ${error.status}: ${error.statusText}`;
        }
      }

      errorDialogService.show(message);
      return throwError(() => error);
    })
  );
};
