import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoadUser } from 'src/app/state/app.action';
import { user } from 'src/app/state/app.state';
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
    private store: Store<{ user: user }>
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
    console.log(this.signUpForm.value);

    if (this.signUpForm.value.password == this.signUpForm.value.cpassword) {
      this.AService.registerUser(this.signUpForm.value).subscribe(
        (data) => (
          console.log(data),
          localStorage.setItem('token', data.token),
          this.store.dispatch(LoadUser(data.user)),
          this.router.navigate(['/']).then(() => window.location.reload())
        ),
        (err) => console.log(err),
        () => console.log('Completing Registerting the user')
      );
    }
  }
}
