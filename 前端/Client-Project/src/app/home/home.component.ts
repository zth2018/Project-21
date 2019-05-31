import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/User.service';
import { InstitutionService } from '../services/institution.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = "home";
  isCollapsed = false;
  isReverseArrow = false;
  width = 200;
  value: any;

  menulist: any[];
  submenulist: any[];
  constructor(private userService:UserService,private institutionService:InstitutionService) {

    this.menulist = [
      { "title": "用户管理", "link": "usermanagement" },
      { "title": "院校管理", "link": "institutionmanagement" },
      { "title": "角色管理", "link": "#" },
      { "title": "设置", "link": "#" },
      { "title": "安全退出", "link": "#" },
      { "title": "标准列表页", "link": "listpage" },
      { "title": "标准编辑页", "link": "editpage" }
    ];


    this.submenulist = [
      {
        "title": "我的班课", "menulist": [
          { "title": "我创建的班课", "link": "mycreatedclass" },
          { "title": "我加入的班课", "link": "myjoinedclass" }
        ]
      },
      {
        "title": "一个菜单", "menulist": [
          { "title": "menu1", "link": "#" },
          { "title": "menu2", "link": "#" }
        ]
      }
    ];


  }

  ngOnInit() {
    this.institutionService.refreshtoken();
  }

}
