import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/component/home/home.component';
import { UsersComponent } from './shared/component/users/users.component';
import { ProductsComponent } from './shared/component/products/products.component';
import { FairsComponent } from './shared/component/fairs/fairs.component';
import { UsersformComponent } from './shared/component/users/usersform/usersform.component';
import { UserComponent } from './shared/component/users/user/user.component';
import { PagenotfoundComponent } from './shared/component/pagenotfound/pagenotfound.component';
import { ProductformComponent } from './shared/component/products/productform/productform.component';
import { ProductComponent } from './shared/component/products/product/product.component';
import { FairDetailsComponent } from './shared/component/fairs/fair-details/fair-details.component';
import { AuthGuardService } from './shared/service/auth-guard.service';
import { AuthComponent } from './shared/component/auth/auth.component';

const routes: Routes = [
  {
    path:"",
    component:AuthComponent
    // redirectTo:"home",
    // pathMatch:"full"
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"users",
    component:UsersComponent,
    children:[
      {
        path:"addusers",
        component:UsersformComponent
      },
      {
        path:":userid",
        component:UserComponent
      },
      {
        path:":userid/edit",
        component:UsersformComponent
      },
    ]
  },

  {
    path:"products",
    component:ProductsComponent,
    children:[
      {
        path:"addproduct",
        component:ProductformComponent
      },
      {
        path:":id",
        component:ProductComponent
      },
      {
        path:":id/edit",
        component:ProductformComponent
      },
    ]
  },

  {
    path:"fairs",
    component:FairsComponent,
    canActivate:[AuthGuardService],
    children:[
      {
        path:":fairId",
        component:FairDetailsComponent,

      },
    ]
  },
  {
    path:"pagenotfound",
    component:PagenotfoundComponent
  },
  {
    path:"**",
    redirectTo:"pagenotfound"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
