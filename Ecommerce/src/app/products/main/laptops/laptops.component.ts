import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Laptop } from 'src/app/models/user';
import { GetLaptops } from '../../state/products.action';
import { getLaptops } from '../../state/products.selector';
import { Product } from '../../state/products.state';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css'],
})
export class LaptopsComponent implements OnInit {
  constructor(private store: Store<Product>) {}
  laptops!: Laptop[];

  ngOnInit(): void {
    this.store.select(getLaptops).subscribe((d) => (this.laptops = d));
    if (this.laptops.length == 0) {
      this.store.dispatch(GetLaptops());
      console.log('Laptops called');
    }
    console.log(this.laptops);
  }
}
