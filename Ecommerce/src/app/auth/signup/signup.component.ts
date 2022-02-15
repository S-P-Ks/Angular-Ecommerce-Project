import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { LoadUser, SignUpStart } from 'src/app/state/app.action';
import { SET_LOADING_SPINNER } from 'src/store/Shared/shared.action';
import { AServiceService } from '../a-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;
  constructor(
    private AService: AServiceService,
    private router: Router,
    private store: Store<{ user: User }>
  ) {}

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ]),
      password: new FormControl('', [Validators.required]),
      cpassword: new FormControl('', [Validators.required]),
    });
  }

  signUp() {
    this.store.dispatch(SET_LOADING_SPINNER({ status: true }));
    this.store.dispatch(SignUpStart(this.signUpForm.value));
  }
}
