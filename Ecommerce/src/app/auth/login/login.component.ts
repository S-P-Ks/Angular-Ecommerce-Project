import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoadUser } from 'src/app/state/app.action';
import { user } from 'src/app/state/app.state';
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
    private store: Store<{ user: user }>,
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
    this.loginService.loginUser(this.loginForm.value).subscribe(
      (d) => (
        localStorage.setItem('token', d.token),
        console.log(d.u),
        this.store.dispatch(LoadUser(d.u)),
        this.router.navigate(['/']).then(() => window.location.reload())
      ),
      (err) => ((this.error = err.error), console.log(this.error)),
      () => console.log('Login Completed')
    );
  }
}
