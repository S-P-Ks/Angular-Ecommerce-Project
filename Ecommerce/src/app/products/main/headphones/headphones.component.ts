import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { HeadPhone } from 'src/app/models/user';
import { GetHeadPhones } from '../../state/products.action';
import {
  getHeadphones,
  Products_State_Name,
} from '../../state/products.selector';
import { Product } from '../../state/products.state';

@Component({
  selector: 'app-headphones',
  templateUrl: './headphones.component.html',
  styleUrls: ['./headphones.component.css'],
})
export class HeadphonesComponent implements OnInit {
  constructor(private store: Store<Product>) {}
  headphones!: any;

  ngOnInit(): void {
    this.store.select(getHeadphones).subscribe((d) => (this.headphones = d));
    if (this.headphones.length == 0) {
      this.store.dispatch(GetHeadPhones());
      console.log('Called');
    }
  }
}
