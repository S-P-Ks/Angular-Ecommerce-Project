import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SmartPhone } from 'src/app/models/user';
import { GetSmartPhones } from '../../state/products.action';
import { getSmartphones } from '../../state/products.selector';
import { Product } from '../../state/products.state';

@Component({
  selector: 'app-smartphones',
  templateUrl: './smartphones.component.html',
  styleUrls: ['./smartphones.component.css'],
})
export class SmartphonesComponent implements OnInit {
  constructor(private store: Store<Product>) {}
  smartphones!: SmartPhone[];
  ngOnInit(): void {
    this.store.select(getSmartphones).subscribe((d) => (this.smartphones = d));

    if (this.smartphones.length == 0) {
      this.store.dispatch(GetSmartPhones());
      console.log('Smartphones called');
    }
    console.log(this.smartphones);
  }
}
