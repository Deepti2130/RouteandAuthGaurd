import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/component/home/home.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { UsersComponent } from './shared/component/users/users.component';
import { ProductsComponent } from './shared/component/products/products.component';
import { FairsComponent } from './shared/component/fairs/fairs.component';
import { PagenotfoundComponent } from './shared/component/pagenotfound/pagenotfound.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './shared/component/users/user/user.component';
import { UsersformComponent } from './shared/component/users/usersform/usersform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material/material.module';
import { ProductComponent } from './shared/component/products/product/product.component';
import { ProductformComponent } from './shared/component/products/productform/productform.component';
import { FairCardsComponent } from './shared/component/fairs/fair-cards/fair-cards.component';
import { FairDetailsComponent } from './shared/component/fairs/fair-details/fair-details.component';
import { AuthComponent } from './shared/component/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    UsersComponent,
    ProductsComponent,
    FairsComponent,
    PagenotfoundComponent,
    UserComponent,
    UsersformComponent,
    ProductComponent,
    ProductformComponent,
    FairCardsComponent,
    FairDetailsComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
