import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

export const errorsInterceptor: HttpInterceptorFn = (req, next) => {
  const _ToasterService = inject(ToastrService);

  return next(req).pipe(
    catchError((err) => {
      console.log('interceptor', err);
      _ToasterService.error(err.message , 'failed to get the data');

      return throwError(() => err);
    })
  );
};
