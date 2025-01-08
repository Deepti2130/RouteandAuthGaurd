import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IcanDeactivatecomp } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CompDeactGuard implements CanDeactivate<IcanDeactivatecomp> {
  canDeactivate(
    component: IcanDeactivatecomp,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canDeactivate()
  }

}
