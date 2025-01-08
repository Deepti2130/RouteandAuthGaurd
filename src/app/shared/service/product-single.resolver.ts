import { inject, Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Iproduct } from '../model/product';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductSingleResolver implements Resolve<Iproduct> {
  private _productservice = inject(ProductService)
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Iproduct {
   //id of the product
   console.log(route['params'])

   let productId:string = route.params['id']

   //API call
   let obj = this._productservice.fetchproductdata(productId)
   console.log(obj)
   return obj
  }
}
