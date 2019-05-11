import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/User.service';
import { ClassService } from '../../../services/class.service';
import { Class } from '../../../interface/class';

interface T_class {
  id: string;
  classname: string;
  description: string;
  ownerphone: string;
  ownername: string;
  addtime: string;
  edittime: string;
  starttime: string;
  endtime: string;

}


@Component({
  selector: 'app-myjoined',
  templateUrl: './myjoined.component.html',
  styleUrls: ['./myjoined.component.scss']
})
export class MyjoinedComponent implements OnInit {
  _class: Class;
  userphone: string;
  class_list: any;
  constructor(private User: UserService, private T_class: ClassService) { }

  ngOnInit() {
    this.userphone = this.User.GetUserphone();
    this.T_class.getJoinedclass(this.userphone, (rs: any) => {
      this.class_list = rs;
    });
  }



  test(a: string) {
    
    this._class = {
      id: null,
      classname: "17.28测试",
      description: "17.28测试",
      ownerphone: "17.28测试",
      addtime: null,
      edittime: null,
      starttime: "17.28测试",
      endtime: "17.28测试"
    }

    this.T_class.createclass(this._class);
  }


}
