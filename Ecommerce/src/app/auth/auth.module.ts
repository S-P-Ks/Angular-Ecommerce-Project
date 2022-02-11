import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { LoggedGuard } from './logged.guard';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoggedGuard],
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [LoggedGuard],
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
  declarations: [LoginComponent, SignupComponent],
})
export class AuthModule {}
