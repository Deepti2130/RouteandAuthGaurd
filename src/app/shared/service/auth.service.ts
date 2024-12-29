import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userloginstate : boolean = false
  constructor(
    private _router:Router
  ) { }

isAuthenticated():Promise<boolean>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if(localStorage.getItem('tokenvalue')){
        this.userloginstate = true
      }else{
        this.userloginstate = false
      }

      resolve(this.userloginstate)
    }, 1000)
  })
}


  //login
  onApplogin(usercredential:{email:string, password:string}){
    //API call for log in
    if(usercredential.email === 'deepti@gmail.com' && usercredential.password === 'deepti@30'){
      this.userloginstate = true
      //if userlogin state is true then it is redirect to fairs dash

      localStorage.setItem('tokenvalue',"JWT token taken from LS")
      this._router.navigate(['home'])
    }else{
      alert('Inavlid email and password')
    }
  }
}