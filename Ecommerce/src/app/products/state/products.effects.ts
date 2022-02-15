import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, tap, map } from 'rxjs';
import { ProductsService } from '../products.service';
import {
  GetHeadPhones,
  GetHeadPhoneSuccess,
  LoadHeadPhones,
} from './products.action';

@Injectable()
export class ProductEffect {
  constructor(
    private actions$: Actions,
    private ProductService: ProductsService
  ) {}

  headPhones$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetHeadPhones),
      exhaustMap((action) => {
        console.log(action);
        return this.ProductService.getHeadPhones().pipe(
          tap((d) => console.log(d)),
          map((data) => {
            console.log('Load');
            return LoadHeadPhones({ HeadPhones: data });
          })
        );
      })
    );
  });
}
