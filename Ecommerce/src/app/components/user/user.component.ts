import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  Name!: string;
  Email!: string;
  constructor(private store: Store<{ user: User }>) {}

  ngOnInit(): void {
    this.store
      .select('user')
      .subscribe((d) => ((this.Name = d.name), (this.Email = d.email)));
  }
}
