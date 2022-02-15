import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { exhaustMap, map, switchMap, tap } from 'rxjs';
import { App_State } from 'src/store/app.state';
import { SET_LOADING_SPINNER } from 'src/store/Shared/shared.action';
import { AServiceService } from '../auth/a-service.service';
import {
  LoadUser,
  LoginStart,
  LoginSuccess,
  signUpStart,
  SignUpStart,
} from './app.action';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private AService: AServiceService,
    private store: Store<App_State>
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LoginStart),
      exhaustMap((action) => {
        console.log(action);
        return this.AService.loginUser(action).pipe(
          map((data) => {
            console.log(data.token);
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.u));
            this.router.navigate(['/']);
            this.store.dispatch(SET_LOADING_SPINNER({ status: false }));
            return LoadUser(data.u);
          })
        );
      })
    );
  });

  signup$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SignUpStart),
      exhaustMap((action) => {
        console.log(action);
        return this.AService.registerUser(action).pipe(
          tap((data) => console.log(data)),
          map((data) => {
            // console.log(data + '***');
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            this.router.navigate(['/']);
            this.store.dispatch(SET_LOADING_SPINNER({ status: false }));
            return LoadUser(data.user);
          })
        );
      })
    );
  });
}
