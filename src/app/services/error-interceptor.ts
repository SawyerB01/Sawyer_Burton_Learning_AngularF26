import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ErrorService } from './error';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const errorService = inject(ErrorService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let message = 'Something went wrong.';

      if (error.status === 0) {
        message = 'Network error – the request was blocked or the server is unreachable.';
      } else if (error.status === 404) {
        message = 'Resource not found (404).';
      } else if (error.status >= 500) {
        message = 'Server error. Please try again later.';
      }

      errorService.setError(message);
      return throwError(() => error); // rethrow so other code can still react
    })
  );
};