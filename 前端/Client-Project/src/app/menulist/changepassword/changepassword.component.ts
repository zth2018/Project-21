import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/User.service';
import { NzMessageService } from 'ng-zorro-antd';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {
  oldpassword: string;
  newpassword: string;
  newpassword_confirm: string;

  constructor(private userservice:UserService,private message:NzMessageService) { }

  ngOnInit() {
  }

  changepassword() {
    if (this.newpassword == this.newpassword_confirm) {
      this.userservice.changepassword(this.oldpassword, this.newpassword);
      this.oldpassword = null;
      this.newpassword = null;
      this.newpassword_confirm = null;
    } else {
      this.message.warning("确认密码失败，请重新输入");
    }
    
  }


}
