import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _authservice:AuthService
  ) { }

  ngOnInit(): void {
  }


  onLogout(){
    //need to API call
    this._authservice.logoutformApp()
  }

}
