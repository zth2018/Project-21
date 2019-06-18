import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/User.service';
import { InstitutionService } from '../services/institution.service';
import { RoleService } from '../services/role.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  username: any;
  title = "home";
  isCollapsed = false;
  isReverseArrow = false;
  width = 200;
  value: any;
  menutitle: any;
  menulist: any[];
  submenulist: any[];
  role: any;
  constructor(private userService:UserService,private institutionService:InstitutionService,private roleservice:RoleService) {

    this.menulist = [
      { "title": "欢迎页", "link": "welcome" },
      { "title": "用户管理", "link": "usermanagement" },
      { "title": "院校管理", "link": "institutionmanagement" },
      { "title": "角色管理", "link": "rolemanagement" },
      { "title": "个人信息", "link": "personinfo" },
      { "title": "修改密码", "link": "changepassword" },
      { "title": "安全退出", "link": "safequit" },
      
    ];


  }

  ngOnInit() {
    //this.userService.getpersoninfo(localStorage.getItem("uid"), (callback: any) => {
    //  this.role = callback.data.role;
    //})
    this.role=localStorage.getItem("role")
    this.menutitle = "欢迎页";
    this.username = localStorage.getItem("username");
    this.institutionService.refreshtoken();
    this.roleservice.refreshtoken();
    this.userService.refreshtoken();
  }

  titlechange(title: any) {
    this.menutitle = title;
  }


  ngDoCheck(): void {


  }


}
