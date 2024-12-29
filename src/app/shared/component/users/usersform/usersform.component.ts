import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Iuser } from 'src/app/shared/model/user';
import { UserService } from 'src/app/shared/service/user.service';
import { UuidService } from 'src/app/shared/service/uuid.service';

@Component({
  selector: 'app-usersform',
  templateUrl: './usersform.component.html',
  styleUrls: ['./usersform.component.scss']
})
export class UsersformComponent implements OnInit {
userid! :string;

userinfo!:Iuser;

userForm !:FormGroup

isInEditmode:boolean = false

updatedbtnFlag:boolean = false
  constructor(
    private _routes:ActivatedRoute,
    private _userservice:UserService,
    private _uuidservice:UuidService
  ) { }

  ngOnInit(): void {
    //we create a form in ts
    this.userForm = new FormGroup({
      username:new FormControl(null, [Validators.required]),
      userrole:new FormControl(null, [Validators.required]),

    })
    this.userid = this._routes.snapshot.params['userid']


    if(this.userid){
      this.isInEditmode = true
    this.userinfo = this._userservice.fetchuser(this.userid)

    this.userForm.patchValue(this.userinfo)
    }

    this._routes.queryParams
    .subscribe((params:Params)=>{
      console.log(params)

      if(params['userrole'].toLowerCase().includes('candidate')){
        this.userForm.disable()
        this.updatedbtnFlag = true
      }else{
        this.userForm.enable()
      }


    })
  }

  onAdduser(){
    if(this.userForm.valid){
      //first we need a newuserobj
     console.log(this.userForm.value)
      let userobj:Iuser = {
        ...this.userForm.value,
        userid:this._uuidservice.generateUuid()
      }
      console.log(userobj)
      this._userservice.Adduser(userobj)
      this.userForm.reset()

    }
  }

  onupdateuser(){
    let updatedobj = {
      ...this.userForm.value,
      userid:this.userid
    }
    //API call to update user
  this._userservice.updateuser(updatedobj)
  }





}
