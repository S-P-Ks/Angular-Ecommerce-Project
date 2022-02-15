import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { HeadPhone } from 'src/app/models/user';
import { GetHeadPhones } from '../../state/products.action';
import { getHeadphones } from '../../state/products.selector';
import { Product } from '../../state/products.state';

@Component({
  selector: 'app-headphones',
  templateUrl: './headphones.component.html',
  styleUrls: ['./headphones.component.css'],
})
export class HeadphonesComponent implements OnInit {
  constructor(private store: Store<Product>) {}
  headphones!: HeadPhone[];

  ngOnInit(): void {
    // this.headphones = this.store.select(getHeadphones);
    this.store.dispatch(GetHeadPhones());
    console.log('Called');
  }
}
