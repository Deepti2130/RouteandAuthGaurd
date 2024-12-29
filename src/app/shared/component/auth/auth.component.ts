import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  LogInform!:FormGroup;
  Signupform!:FormGroup

  allReadyHasAccount : boolean = true
  constructor(
    private _Authservice:AuthService
  ) { }

  ngOnInit(): void {
   this.createLogInform();
   this.createSignUpform()
    }


    createLogInform(){
      this.LogInform = new FormGroup({
        email : new FormControl(null, [Validators.required]),
        password : new FormControl(null, [Validators.required])
      })
    }

      createSignUpform(){
        this.Signupform = new FormGroup({
          email : new FormControl(null, [Validators.required]),
          password : new FormControl(null, [Validators.required]),
          confirmpassword : new FormControl(null, [Validators.required])
        })
      }

      onLogIn(){
     //object of email and password
     if(this.LogInform.valid){
      let obj = this.LogInform.value
      console.log(obj)
      this._Authservice.onApplogin(obj)

     }
      }


      onSignup(){
        if(this.Signupform.valid){
          let signobj = this.Signupform.value
          console.log(signobj)
        }
      }
  }


