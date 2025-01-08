import { inject, Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductService } from './product.service';
import { Iproduct } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolver implements Resolve<Iproduct[]> {

 constructor(
  private _productservice:ProductService
 ){

 }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this._productservice.fetchAllproduct()

  }

}
