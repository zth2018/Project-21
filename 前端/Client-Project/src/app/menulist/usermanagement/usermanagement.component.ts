import { Component, OnInit, Output, Input } from '@angular/core';
import { UserService } from '../../services/User.service';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';
import { RoleService } from '../../services/role.service';
import { InstitutionService } from '../../services/institution.service';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.scss']
})
export class UsermanagementComponent implements OnInit {
  listOfDisplay: any[] = [];


  constructor(private userservice: UserService, private modalService: NzModalService) { }

  ngOnInit() {
    this.userservice.getalluserinfo((callback: any) => {
      this.listOfDisplay = callback;
    });
  
  }//-------------------------------------------------------------------------------------------------

  adduser() {
    const modal = this.modalService.create({
      nzTitle: '添加用户',
      nzContent: adduserComponent,
      nzComponentParams: {

      },
      nzFooter: [
        {
          label: '确定',
          onClick: data => { 
              this.userservice.adduserbym(data)   
            modal.destroy()
          }
        },
        {
          label: '取消',
          onClick: () => modal.destroy()
        }
      ]
    });
    //modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
    //modal.afterClose.subscribe(result => console.log());

  }//---------------------------------------------------------------------------------------------------------------

  deleteuser(uid: string) {
    this.userservice.deleteuserbym(uid);
  }//---------------------------------------------------------------------------------------------------------------

  updateuserinfo(user:any) {
    const modal = this.modalService.create({
      nzTitle: '修改用户信息',
      nzContent: updateuserComponent,
      nzComponentParams: {
        user:user
      },
      nzFooter: [
        {
          label: '确定',
          onClick: data => {
            this.userservice.updateuserinfo(data)
            modal.destroy()
          }
        },
        {
          label: '取消',
          onClick: () => modal.destroy()
        }
      ]
    });

  }//--------------------------------------------------------------------------------------------------------------



  refreshlist() {
    this.userservice.getalluserinfo((callback: any) => {
      this.listOfDisplay = callback;
    });
  }

}//----------------------------------------------------------------------------------------






@Component({
  selector: 'app - adduser',
  template: `
    <div>
    <h3>用户名:</h3>
    <input nz-input style="width: 200px" placeholder="必填" [(ngModel)]="username" />
    <h3>手机号码:</h3>
    <input nz-input style="width: 300px" placeholder="选填" [(ngModel)]="phone" />
    <h3>密码:</h3>
    <input nz-input style="width: 200px" placeholder="必填" [(ngModel)]="password" />



    <h3>账号角色:</h3>
      <nz-select
      style="width: 200px;"
      nzAllowClear
      nzPlaceHolder="选择角色"
      [(ngModel)]="role"
      >
      <nz-option *ngFor="let option of listofrole" [nzLabel]="option.role_name"  [nzValue]="option.role_name"></nz-option>
      </nz-select>






    <h3>姓名:</h3>
    <input nz-input style="width: 150px" placeholder="选填" [(ngModel)]="name" />

    <h3>学校:</h3>
    <nz-select
      style="width: 300px;"
      nzAllowClear
      nzPlaceHolder="选择学校"
      [(ngModel)]="school"
      (ngModelChange)="institutionlist($event)"
      >
      <nz-option *ngFor="let option of listofschool" [nzLabel]="option.schoolname"  [nzValue]="option.schoolname"></nz-option>
      </nz-select>

    <h3>学院:</h3>
      <nz-select
      style="width: 300px;"
      nzAllowClear
      nzPlaceHolder="请先选择学校"
      [(ngModel)]="institution"
      >
      <nz-option *ngFor="let option of listofinstitution" [nzLabel]="option.institution"  [nzValue]="option.institution"></nz-option>
      </nz-select>




    <h3>性别:</h3>
     <nz-select
      style="width: 100px;"
      nzAllowClear
      nzPlaceHolder="性别"
      [(ngModel)]="gender"
      >
      <nz-option nzLabel="男" nzValue="男"></nz-option>
      <nz-option nzLabel="女" nzValue="女"></nz-option>
      </nz-select>


    <h3>年龄:</h3>
    <input nz-input style="width: 100px" placeholder="选填" [(ngModel)]="age" />

    </div>
  `
})

export class adduserComponent {
  @Output() username: string
  @Output() phone: string
  @Output() password: string
  @Output() role: string
  @Output() name: string
  @Output() school: string
  @Output() institution: string
  @Output() gender: string
  @Output() age: string

  listofrole: any;
  listofschool: any[]=[];
  listofinstitution: any[]=[];
  constructor(private modal: NzModalRef, private roleservice: RoleService,private institutionservice:InstitutionService) {

  }
  ngOnInit() {
    this.roleservice.getallrole((callback: any) => {
      this.listofrole = callback.data;
    });

    this.institutionservice.getallschool((callback: any) => {
      this.listofschool = callback.data;
    });

  }//----------------------------------------------------------------------------------

  institutionlist(data: string) {
    
    var x = this.listofschool.findIndex((value: any, index: number):boolean => {
      if (value.schoolname == data) return true;
    });
    if (x != -1) {
      this.listofinstitution = this.listofschool[x].institutions;
    }
    else {
      this.listofinstitution = [];
      this.institution = null;
    }
      
  }

}//-----------------------------------------------------------------------





@Component({
  selector: 'app - updateuser',
  template: `
    <div>
    <h3>用户名:</h3>
    <input nz-input style="width: 200px" placeholder="必填" [(ngModel)]="username" />
    <h3>手机号码:</h3>
    <input nz-input style="width: 300px" placeholder="选填" [(ngModel)]="phone" />


    <h3>账号角色:</h3>
      <nz-select
      style="width: 200px;"
      nzAllowClear
      nzPlaceHolder="选择角色"
      [(ngModel)]="role"
      >
      <nz-option *ngFor="let option of listofrole" [nzLabel]="option.role_name"  [nzValue]="option.role_name"></nz-option>
      </nz-select>






    <h3>姓名:</h3>
    <input nz-input style="width: 150px" placeholder="选填" [(ngModel)]="name" />

    <h3>学校:</h3>
    <nz-select
      style="width: 300px;"
      nzAllowClear
      nzPlaceHolder="选择学校"
      [(ngModel)]="school"
      (ngModelChange)="institutionlist($event)"
      >
      <nz-option *ngFor="let option of listofschool" [nzLabel]="option.schoolname"  [nzValue]="option.schoolname"></nz-option>
      </nz-select>

    <h3>学院:</h3>
      <nz-select
      style="width: 300px;"
      nzAllowClear
      nzPlaceHolder="请先选择学校"
      [(ngModel)]="institution"
      >
      <nz-option *ngFor="let option of listofinstitution" [nzLabel]="option.institution"  [nzValue]="option.institution"></nz-option>
      </nz-select>




    <h3>性别:</h3>
     <nz-select
      style="width: 100px;"
      nzAllowClear
      nzPlaceHolder="性别"
      [(ngModel)]="gender"
      >
      <nz-option nzLabel="男" nzValue="男"></nz-option>
      <nz-option nzLabel="女" nzValue="女"></nz-option>
      </nz-select>


    <h3>年龄:</h3>
    <input nz-input style="width: 100px" placeholder="选填" [(ngModel)]="age" />

    </div>
  `
})

export class updateuserComponent {
  @Output() username: string
  @Output() phone: string
  @Output() role: string
  @Output() name: string
  @Output() school: string
  @Output() institution: string
  @Output() gender: string
  @Output() age: string
  @Output() id:string
  @Input()  user:any
  listofrole: any;
  listofschool: any[] = [];
  listofinstitution: any[] = [];
  constructor(private modal: NzModalRef, private roleservice: RoleService, private institutionservice: InstitutionService) {

  }
  ngOnInit() {
    this.roleservice.getallrole((callback: any) => {
      this.listofrole = callback.data;
    });

    this.institutionservice.getallschool((callback: any) => {
      this.listofschool = callback.data;
      var x = this.listofschool.findIndex((value: any, index: number): boolean => {
        if (value.schoolname == this.user.school) return true;
      });
      if (x != -1) {
        this.listofinstitution = this.listofschool[x].institutions;
      }
      else {
        this.listofinstitution = [];
      }
    });
    this.username = this.user.username;
    this.phone = this.user.phone;
    this.role = this.user.role;
    this.name = this.user.name;
    this.school = this.user.school;
    this.institution = this.user.institution;
    this.gender = this.user.gender;
    this.age = this.user.age;
    this.id = this.user.id;
    
  }//----------------------------------------------------------------------------------

  institutionlist(data: string) {

    var x = this.listofschool.findIndex((value: any, index: number): boolean => {
      if (value.schoolname == data) return true;
    });
    if (x != -1) {
      this.listofinstitution = this.listofschool[x].institutions;
    }
    else {
      this.listofinstitution = [];
      this.institution = null;
    }

  }

}//-----------------------------------------------------------------------
