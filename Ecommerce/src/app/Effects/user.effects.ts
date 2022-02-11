import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs';
import { LoginStart } from '../state/app.action';

@Injectable()
export class UserEffects {
  constructor(private action$: Actions) {}

  loadUser$ = createEffect(() => this.action$.pipe(ofType(LoginStart)));
}
