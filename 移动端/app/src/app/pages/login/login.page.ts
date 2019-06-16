import { Component, OnInit } from '@angular/core';
import {Router}from '@angular/router';
import { UserService} from '../../../api/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  account:any;
  login_by:number=0;
  password:string;
  constructor(private router:Router,private userService:UserService) { }

  ngOnInit() {
    this.account=localStorage.getItem("account");
  }

 
  login(){
    this.userService.login(this.account,this.password,this.login_by);
  }//------------------------------------------------------------------------------------------------

  segmentButtonClicked(by_what:number){
    this.login_by=by_what;
  }
  register(){
    this.router.navigateByUrl("register");
  }

}
