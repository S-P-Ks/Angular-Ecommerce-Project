import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoginUserService } from '../login-user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(
    private store: Store<{ user: User }>,
    private loginService: LoginUserService,
    private router: Router
  ) {}
  userName!: string;
  email!: string;
  ngOnInit(): void {
    this.store.select('user').subscribe(
      (d) => (
        (this.userName = d.name),
        (this.email = d.email),
        console.log(this.userName, this.email)
      ),
      (err) => console.log(err),
      () => console.log('Completed user Profile')
    );
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/']).then(() => window.location.reload());
  }
}
