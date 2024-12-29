import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iuser } from 'src/app/shared/model/user';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
//we need Id for respective user and which is need to store

userid!:string;

userinfo!:Iuser
  constructor(
    private _routes:ActivatedRoute,
    private _userservice:UserService,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this._routes.params
    //we directly used a params coz we change the user and params behaves as observable hence it is need to subscribe
    .subscribe((params:Params)=>{
      console.log(params)

      this.userid = params['userid']

      //for single user we need to API call

      this.userinfo = this._userservice.fetchuser(this.userid)
    })


  }

  gotoEdituser(){
      this._router.navigate(['edit'],{
        relativeTo:this._routes,
        queryParamsHandling:"preserve"//in edit queryparams must be preserve
      })
  }

  onRemoveuser(){
    //need to API call
    this._userservice.removeuser(this.userid)
  }

}
