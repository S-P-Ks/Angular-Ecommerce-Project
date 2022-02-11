import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import ls from 'localstorage-slim';
import { getUser, loadUser, LoadUser } from './state/app.action';
import { user } from './state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Ecommerce';
  u!: user | null;
  constructor(private store: Store<{ user: user }>) {}

  ngOnInit(): void {
    this.u = ls.get('user');
    console.log(this.u?.email);
    this.store.dispatch(LoadUser({ name: this.u?.name, email: this.u?.email }));
  }
}
