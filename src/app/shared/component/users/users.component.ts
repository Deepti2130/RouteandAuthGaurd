import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../model/user';
import { UserService } from '../../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
//to create property to store all the info
userinfo!:Array<Iuser>

//it is used for when we open usersdash then show first user data
selectedId! : string
  constructor(
    private _userservice:UserService,
    private _router:Router,
    private _routes:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.userinfo = this._userservice.fetchAlluser()

    this.selectedId = this.userinfo[0].userid
    this._router.navigate([this.userinfo[0].userid],{
      relativeTo:this._routes,
      queryParams:{userrole:this.userinfo[0].userrole}
    })
   }

   onuserselect(user:Iuser){
    this.selectedId = user.userid
   }

}

