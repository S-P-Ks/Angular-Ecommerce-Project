import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { LoadUser, LoginStart } from 'src/app/state/app.action';
import { SET_LOADING_SPINNER } from 'src/store/Shared/shared.action';

import { UserReducer } from '../../state/app.reducer';
import { AServiceService } from '../a-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitButton = false;
  error?: string;
  constructor(
    private store: Store<{ user: User }>,
    private loginService: AServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });

    this.loginForm.statusChanges.subscribe((d) =>
      d == 'INVALID' ? (this.submitButton = false) : (this.submitButton = true)
    );
  }

  login() {
    this.store.dispatch(SET_LOADING_SPINNER({ status: true }));
    this.store.dispatch(LoginStart(this.loginForm.value));
  }
}
