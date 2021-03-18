import {Action, createReducer, on} from '@ngrx/store';
import {AuthStateInterface} from '../types/auth-state.interface';
import {registerAction} from './actions/register.action';

const initialState: AuthStateInterface = {
  isSubmitting: false,
};

const _authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  )
);

export function authReducer(state: AuthStateInterface, action: Action) {
  return _authReducer(state, action);
}
