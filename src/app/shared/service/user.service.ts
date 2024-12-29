import { Injectable } from '@angular/core';
import { Iuser } from '../model/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userArr:Array<Iuser> = [
    {
      username:"Deepti Jadhav",
      userid:"1",
      userrole:"candidate"
    },
    {
      username:"Sneha Tipradhi",
      userid:"2",
      userrole:"candidate"
    },
    {
      username:"Shubhi Bharate",
      userid:"3",
      userrole:"Admin"
    }
   ]

  constructor(
    private _router:Router
  ) { }

  //API call to all the users data
  fetchAlluser():Array<Iuser>{
    return this.userArr
  }


  //API call to single user
  fetchuser(id:string):Iuser{
    return this.userArr.find(user=>user.userid === id)!
  }

  //API call to add new user
  Adduser(user:Iuser){
    this.userArr.push(user)
    this._router.navigate(['/users'])
  }

  //API call to update user
  updateuser(updateduser:Iuser){
  let getIndex = this.userArr.findIndex(user=>user.userid === updateduser.userid)

  this.userArr[getIndex] = updateduser
  this._router.navigate(['/users'])
  }

  //API call to remove user
  removeuser(id:string){
    let getIndex = this.userArr.findIndex(user=>user.userid === id)

    this.userArr.splice(getIndex,1);
    this._router.navigate(['/users'])
  }
}
