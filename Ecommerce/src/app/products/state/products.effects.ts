import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, tap, map } from 'rxjs';
import { ProductsService } from '../products.service';
import {
  GetHeadPhones,
  GetHeadPhoneSuccess,
  GetLaptops,
  GetSmartPhones,
  LoadHeadPhones,
  LoadLaptops,
  LoadSmartPhones,
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
        return this.ProductService.getHeadPhones().pipe(
          map((data) => {
            return LoadHeadPhones({ HeadPhones: data });
          })
        );
      })
    );
  });

  laptops$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetLaptops),
      exhaustMap((action) => {
        return this.ProductService.getLaptops().pipe(
          map((data) => {
            return LoadLaptops({ Laptops: data });
          })
        );
      })
    );
  });

  smartphones$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetSmartPhones),
      exhaustMap((action) => {
        return this.ProductService.getSmartPhones().pipe(
          map((data) => {
            return LoadSmartPhones({ SmartPhones: data });
          })
        );
      })
    );
  });
}
