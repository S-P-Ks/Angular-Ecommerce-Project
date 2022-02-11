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
import { user } from '../state/app.state';

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
    private store: Store<{ user: user }>
  ) {}

  loggedIn!: boolean;

  @HostListener('window:resize', ['$event']) onResize(event: any) {
    console.log(event.target.innerWidth);
    if (event.target.innerWidth > 800) {
      this.userColumn = true;
    } else {
      this.userColumn = false;
    }
  }

  ngOnInit(): void {
    this.loggedIn = this.loginService.loggedIn();
    console.log(this.loggedIn);

    this.store
      .select('user')
      .subscribe(
        (d) => (
          d.email == '' ? (this.u = false) : (this.u = true),
          console.log(this.u)
        )
      );

    if (window.innerWidth > 800) {
      this.userColumn = true;
    } else {
      this.userColumn = false;
    }
    console.log(this.userColumn);
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/']).then(() => window.location.reload());
  }
}
