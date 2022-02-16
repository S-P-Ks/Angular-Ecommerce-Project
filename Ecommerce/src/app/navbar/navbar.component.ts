import {
  Component,
  HostListener,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoginUserService } from '../login-user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  u: boolean = false;
  userColumn = false;
  constructor(
    private loginService: LoginUserService,
    private router: Router,
    private store: Store<{ user: User }>
  ) {}

  loggedIn!: boolean;

  @HostListener('window:resize', ['$event']) onResize(event: any) {
    if (event.target.innerWidth > 800) {
      this.userColumn = true;
    } else {
      this.userColumn = false;
    }
  }

  ngOnInit(): void {
    this.loggedIn = this.loginService.loggedIn();

    this.store
      .select('user')
      .subscribe((d) => (d.email == '' ? (this.u = false) : (this.u = true)));

    if (window.innerWidth > 800) {
      this.userColumn = true;
    } else {
      this.userColumn = false;
    }
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/']).then(() => window.location.reload());
  }
}
