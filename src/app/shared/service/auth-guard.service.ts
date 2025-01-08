import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild{

  constructor(
    private _Authservive:AuthService
  ) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  : Observable<boolean > | Promise<boolean > | boolean  {
    return this._Authservive.isAuthenticated()
    .then(res=>{
      return res
    })
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._Authservive.isAuthenticated()
    .then(res=>{
      return res
    })
  }


}
