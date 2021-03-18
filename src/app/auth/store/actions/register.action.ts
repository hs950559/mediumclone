import {createAction, props} from '@ngrx/store';
import {BackendErrorsInterface} from 'src/app/shared/types/backend-error.interface';
import {CurrentUserInterface} from 'src/app/shared/types/current-user.interface';
import {RegisterRequestInterface} from '../../types/register-request.interface';
import {AuthActionTypes} from '../auth.action-types';

export const registerAction = createAction(
  AuthActionTypes.REGISTER,
  props<{request: RegisterRequestInterface}>()
);

export const registerSuccessAction = createAction(
  AuthActionTypes.REGISTER_SUCCESS,
  props<{currentUser: CurrentUserInterface}>()
);

export const registerFailureAction = createAction(
  AuthActionTypes.REGISTER_FAILURE,
  props<{errors: BackendErrorsInterface}>()
);
