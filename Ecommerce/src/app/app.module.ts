import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './home/categories/categories.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserReducer } from './state/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { USER_STATE_NAME } from './state/app.state';
import { UserComponent } from './user/user.component';
import { UserPageComponent } from './user-page/user-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavbarComponent,
    HomeComponent,
    CategoriesComponent,
    UserComponent,
    UserPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ user: UserReducer }),

    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
