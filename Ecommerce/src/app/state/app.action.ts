import { createAction, props } from '@ngrx/store';

export const loginStart = '[auth page] login start';
export const loginSuccess = '[auth page] login success';
export const loginFail = '[auth page] login fail';
export const loginTest = '[auth page] login test';
export const loadUser = '[auth page] load user';
export const getUser = '[auth page] get user';
export const signUpStart = '[auth page] signup start';
export const signUpFail = '[auth page] signup fail';
export const signUpSuccess = '[auth page] signup success';

// Login Actions
export const LoginStart = createAction(
  loginStart,
  props<{ email: String; password: String }>()
);

export const LoginTest = createAction(loginTest);

export const LoadUser = createAction(
  loadUser,
  props<{ name: string | undefined; email: string | undefined }>()
);

export const LoginSuccess = createAction(loginSuccess);

// SignUp Actions
export const SignUpStart = createAction(
  signUpStart,
  props<{ name: String; email: String; password: String; cpassword: String }>()
);

export const SignUpSuccess = createAction(signUpSuccess);
