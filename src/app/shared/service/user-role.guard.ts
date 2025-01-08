import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRoleGuard implements CanActivate {

  //for navigate
  private _router = inject(Router)
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let loggeduserRole = localStorage.getItem('userrole') as string
    let userroleArr:Array<string>=route.data['userrole']

    if(userroleArr.includes(loggeduserRole)){
      return true
    }else{
      const urlTree:UrlTree = this._router.createUrlTree(['home'])
      return urlTree;
    }




  }

}
