import { Component, OnInit, Input } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';

import { UserService } from '../../../services/User.service';
import { ClassService } from '../../../services/class.service';
import { environment } from '../../../../environments/environment';
import { Observable } from "rxjs";
import { Class } from '../../../interface/class';





@Component({
  selector: 'app-mycreated',
  templateUrl: './mycreated.component.html',
  styleUrls: ['./mycreated.component.scss']
})
export class MycreatedComponent implements OnInit {
  userphone: string;
  class_list: any;
 
  editclassid: any;
  t_class: Class;
  editclass: Class;

  constructor(private Userservice: UserService, private Classservice: ClassService, private modalService: NzModalService) {

  }



  ngOnInit() {

    this.userphone = localStorage.getItem("userphone");
    this.Classservice.getCreatedclass(this.userphone, (rs: any) => {
      this.class_list = rs;
    });

  }

  showdetail(class_id: any) {
    console.log(class_id);
    this.Classservice.getclassmember(class_id);
  }

  edit(t_class: Class) {
   
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
     
      addtime: null,
      edittime: null,
      starttime: null,
      endtime: null,
    }
    this.Classservice.updateclass(this.t_class);
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
  @Input() t_class: Class;
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
