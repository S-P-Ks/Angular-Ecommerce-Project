import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeadphonesComponent } from './main/headphones/headphones.component';
import { SmartphonesComponent } from './main/smartphones/smartphones.component';
import { LaptopsComponent } from './main/laptops/laptops.component';
import { CommonModule } from '@angular/common';
import { AuthLogGuard } from '../auth-log.guard';
import { StoreModule } from '@ngrx/store';
import { ProductReducer } from './state/products.reducer';
import { FormsModule } from '@angular/forms';
import { Products_State_Name } from './state/products.selector';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffect } from './state/products.effects';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    canActivate: [AuthLogGuard],
    children: [
      {
        path: 'headphones',
        component: HeadphonesComponent,
      },
      {
        path: 'smartphones',
        component: SmartphonesComponent,
      },
      {
        path: 'laptops',
        component: LaptopsComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    ProductsComponent,
    SidebarComponent,
    HeadphonesComponent,
    SmartphonesComponent,
    LaptopsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(Products_State_Name, ProductReducer),
    FormsModule,
    EffectsModule.forFeature([ProductEffect]),
  ],
  exports: [],
  providers: [],
  entryComponents: [],
})
export class ProductsModule {}
