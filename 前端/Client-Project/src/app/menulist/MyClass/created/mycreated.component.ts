import { Component, OnInit, Input } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';

import { UserService } from '../../../services/User.service';
import { ClassService } from '../../../services/class.service';
import { environment } from '../../../../environments/environment';
import { Observable } from "rxjs";



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
  selector: 'app-mycreated',
  templateUrl: './mycreated.component.html',
  styleUrls: ['./mycreated.component.scss']
})
export class MycreatedComponent implements OnInit {
  userphone: string;
  class_list: any;
 
  editclassid: any;
  t_class: T_class;
  editclass: T_class;

  constructor(private User: UserService, private T_class: ClassService, private modalService: NzModalService) {

  }



  ngOnInit() {

    this.userphone = this.User.GetUserphone();
    this.T_class.getCreatedclass(this.userphone, (rs: any) => {
      this.class_list = rs;
    });

  }

  

  edit(t_class: T_class) {
   
    const modal = this.modalService.create({
      nzTitle: '班课信息编辑',
      nzContent: EditclassComponent,
      nzComponentParams: {
       
        t_class:t_class
      },
      nzFooter: [
        {
          label: '确定',
          onClick: () => modal.destroy()
        },
        {
          label:'取消',
          onClick:()=>modal.destroy()
        }
      ]
    });

    modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));

    // Return a result when closed
    modal.afterClose.subscribe(result => console.log('[afterClose] The result is:', result));

    
  }



  editCancel() {
    
  }

  editOk() {
    
    console.log(this.editclassid);
    this.t_class = {
      id: this.editclassid,
      classname: "update测试",
      description: null,
      ownerphone: null,
      ownername: null,
      addtime: null,
      edittime: null,
      starttime: null,
      endtime: null,
    }
    this.T_class.updateclass(this.t_class);
  }




}

@Component({
  selector: 'app - editclass',
  template: `
    <div>
      <h2>{{ title }}</h2>
      <h4>{{t_class.classname}}</h4>
      <h4>{{ subtitle }}</h4>
     
    </div>
  `
})

export class EditclassComponent {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() t_class: T_class;
  constructor(private modal: NzModalRef) { }

 
}



 //destroyModal(): void {
  //  this.modal.destroy({ data: '结果' });
  //}







//const modal = this.modalService.create({
//  nzTitle: 'Modal Title',
//  nzContent: EditclassComponent,
//  nzComponentParams: {
//    title: '测试',
//    subtitle: 'component sub title，will be changed after 2 sec',
//    t_class: t_class
//  },
//  nzFooter: [
//    {
//      label: '提交',
//      onClick: componentInstance => {
//        componentInstance!.title = 'title in inner component is changed';
//      }
//    }
//  ]
//});

//modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));

//// Return a result when closed
//modal.afterClose.subscribe(result => console.log('[afterClose] The result is:', result));

//// delay until modal instance created
//setTimeout(() => {
//  const instance = modal.getContentComponent();
//  instance.subtitle = 'sub title is changed';
//}, 2000);
