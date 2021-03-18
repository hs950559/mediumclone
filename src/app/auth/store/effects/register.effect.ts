import {Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';
import {map, catchError, switchMap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';

import {
  registerAction,
  registerSuccessAction,
  registerFailureAction,
} from '../actions/register.action';
import {AuthService} from '../../services/auth.service';
import {of} from 'rxjs';
import {CurrentUserInterface} from 'src/app/shared/types/current-user.interface';

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({request}) => {
        return this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            return registerSuccessAction({currentUser});
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              registerFailureAction({errors: errorResponse.error.errors})
            );
          })
        );
      })
    )
  );

  // redirectAfterSubmit$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(registerSuccessAction),
  //       tap(() => {
  //         this.router.navigateByUrl('/')
  //       })
  //     ),
  //   {dispatch: false}
  // )

  constructor(private actions$: Actions, private authService: AuthService) {}
}
