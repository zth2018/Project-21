import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { RoleService } from '../services/role.service';
import { promise } from 'protractor';
import { resolve } from 'q';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private roleservice:RoleService,private router:Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("欢迎使用\"今天不请假\"后台管理系统");
    return true;

  }//-------------------------------------------------------------------------------------------------------


  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //if (state.url == "/homepage/usermanagement") {
    //  return this.roleservice.permissioncheck("用户管理");
    //} else if (state.url == "/homepage/institutionmanagement") {
    //  return this.roleservice.permissioncheck("院校管理");
    //} else if (state.url == "/homepage/rolemanagement") {
    //  return this.roleservice.permissioncheck("角色管理");
    //}

    if (state.url == "/homepage/usermanagement") {
      this.roleservice.permissioncheck("用户管理").subscribe((result: any) => {
        if (result != true) {
          this.router.navigateByUrl("/403");
        } else return true;
      });
    }

    if (state.url == "/homepage/institutionmanagement") {
      this.roleservice.permissioncheck("院校管理").subscribe((result: any) => {
        if (result != true) {
          this.router.navigateByUrl("/403");
        } else return true;
      });
    }

    if (state.url == "/homepage/rolemanagement") {
      this.roleservice.permissioncheck("角色管理").subscribe((result: any) => {
        if (result != true) {
          this.router.navigateByUrl("/403");
        } else return true;
      });
    }


    return true;
  }//-------------------------------------------------------------------------------------------------------


}//----------------------------------------------------------------------------------------------------
