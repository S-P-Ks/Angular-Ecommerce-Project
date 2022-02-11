import { createReducer, on } from '@ngrx/store';
import ls from 'localstorage-slim';
import { LoadUser } from './app.action';
import { intialState } from './app.state';

ls.config.encrypt = true;

export const _authReducer = createReducer(
  intialState,
  on(LoadUser, (state, action: any) => {
    // console.log(state);
    console.log(action);
    let u = { ...state, name: action.name, email: action.email };
    console.log(u);
    ls.set('user', u);
    return u;
  })
);

export function UserReducer(state: any, action: any) {
  return _authReducer(state, action);
}
