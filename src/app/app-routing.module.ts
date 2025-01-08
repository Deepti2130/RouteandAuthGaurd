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
import { UserRoleGuard } from './shared/service/user-role.guard';
import { AdminDashComponent } from './shared/component/admin-dash/admin-dash.component';
import { CompDeactGuard } from './shared/service/comp-deact.guard';
import { ProductsResolver } from './shared/service/products.resolver';
import { ProductSingleResolver } from './shared/service/product-single.resolver';

const routes: Routes = [
  {
    path:"",
    component:AuthComponent
    // redirectTo:"home",
    // pathMatch:"full"
  },
  {
    path:"home",
    component:HomeComponent,
    canActivate:[AuthGuardService, UserRoleGuard],
    title:'Dashboard',
    data:{
      userrole:["Admin", "Buyer", "SuperAdmin"]
    }
  },
  {
    path:"users",
    component:UsersComponent,
    canActivate:[AuthGuardService, UserRoleGuard],
    title:'users',
    data:{
      userrole:["Admin", "SuperAdmin"]
    },
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
    // canActivateChild:[AuthGuardService],
    canActivate:[AuthGuardService, UserRoleGuard],
    title:'products',
    data:{
      userrole:["Admin", "Buyer", "SuperAdmin"]
    },
    resolve:{productData:ProductsResolver},
    children:[
      {
        path:"addproduct",
        component:ProductformComponent
      },
      {
        path:":id",
        component:ProductComponent,
        resolve:{productobj:ProductSingleResolver}
      },
      {
        path:":id/edit",
        component:ProductformComponent,
        // canDeactivate:[CompDeactGuard]
      },
    ]
  },

  {
    path:"fairs",
    component:FairsComponent,
    canActivate:[AuthGuardService, UserRoleGuard],
    title:'Dashboard',
    data:{
      userrole:["Admin", "Buyer", "SuperAdmin"]
    },
    children:[
      {
        path:":fairId",
        component:FairDetailsComponent,

      },
    ]
  },
  {
    path:"admin",
    component:AdminDashComponent,
    canActivate:[AuthGuardService, UserRoleGuard],
    title:'Admin-Dashboard',
    data:{
      userrole:[ "SuperAdmin"]
    }
  },
  {
    path:"pagenotfound",
    component:PagenotfoundComponent,
    canActivate:[AuthGuardService],
    title:'pagenotfound',
    data:{
      msg:'pagenotfound(using static data of Routing)'
    }
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
