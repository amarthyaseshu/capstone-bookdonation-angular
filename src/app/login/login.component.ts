import { RegistrationService } from './../service/registration.service';
import { User } from './../model/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  msg='';

  constructor(private _service: RegistrationService,private _router:Router) { }

  ngOnInit(): void {
  }

  loginUser() {
    this._service.loginUserFromRemote(this.user).subscribe(
    data=>{console.log("response received");
    this._router.navigate(['/'])
  },
    error=>{console.log("exception occured");
  this.msg="Wrong Credentials, please enter valid emailid and password"
  }
    )
  }

  // if navigating through on click
  // gotoregistration(){
  //   this._router.navigate(['/registration'])
  // }

}
