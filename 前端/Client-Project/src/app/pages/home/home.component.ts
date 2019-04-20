import { Component, OnInit } from '@angular/core';

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
  constructor() {

    this.menulist = [    
      { "title": "我的消息", "link": "#" },
      { "title": "设置", "link": "#" },
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

  }

}
