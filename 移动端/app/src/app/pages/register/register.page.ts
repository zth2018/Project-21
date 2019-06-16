import { Component, OnInit } from '@angular/core';
import {Router}from '@angular/router';
import { UserService} from '../../../api/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  username:string;
  phone:string;
  password:string;
  password_confirm:string;
  constructor(private router:Router,private userService:UserService) { }

  ngOnInit() {
  }

  register(){
      if(this.password==this.password_confirm){
        this.userService.register(this.username,this.phone,this.password);
      }else{
        alert("两次输入密码不一致");
      }
  }


  login(){
    this.router.navigateByUrl("login");
  }

}
