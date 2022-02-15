import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import ls from 'localstorage-slim';
import { Observable } from 'rxjs';
import { App_State } from 'src/store/app.state';
import { getLoading } from 'src/store/Shared/shared.selector';
import { User } from './models/user';
import { getUser, loadUser, LoadUser, LoginTest } from './state/app.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Ecommerce';
  u!: User | null;
  loading$!: Observable<boolean>;
  constructor(private store: Store<App_State>) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(getLoading);
    console.log(this.store);

    this.u = ls.get('user');
    console.log(this.u?.email);
    this.store.dispatch(LoadUser({ name: this.u?.name, email: this.u?.email }));
    // this.store.dispatch(LoginTest());
  }
}
