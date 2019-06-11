import { Component, OnInit, Output, Input } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';
import { RoleService } from '../../services/role.service';
import { Response } from '../../interface/response';
@Component({
  selector: 'app-rolemanagement',
  templateUrl: './rolemanagement.component.html',
  styleUrls: ['./rolemanagement.component.scss']
})
export class RolemanagementComponent implements OnInit {
  listOfRole: any[] = [];
 

  constructor(private modalService: NzModalService,private roleservice:RoleService) { }

  ngOnInit() {
    this.roleservice.getallrole((callback: Response) => {
      this.listOfRole = callback.data;
    });

  }//--------------------------------------------------------------------------------------


  refreshlist() {
    this.roleservice.getallrole((callback: Response) => {
      this.listOfRole = callback.data;
    });
  }//--------------------------------------------------------------------------------------



  addrole() {
    const modal = this.modalService.create({
      nzTitle: '添加新角色',
      nzContent: addroleComponent,
      nzComponentParams: {
      },
      nzFooter: [
        {
          label: '确定',
          onClick: componentInstance => {
            if (componentInstance.name != null) {
              this.roleservice.addrole(componentInstance.name)
            }
            //console.log(componentInstance.insititution)
            modal.destroy()
          }
        },
        {
          label: '取消',
          onClick: () => modal.destroy()
        }
      ]
    });
  }//--------------------------------------------------------------------------------------

  addrolepermission(role_name: string) {
    const modal = this.modalService.create({
      nzTitle: role_name,
      nzContent: addrolepermissionComponent,
      nzComponentParams: {
        role_name:role_name
      },
      nzFooter: [
        {
          label: '确定',
          onClick: data => {
            for (let i = 0; i < data.listOfSelectedValue.length; i++) {
              this.roleservice.addrolepermission(role_name,data.listOfSelectedValue[i])
              //console.log(data.listOfSelectedValue[i])
            }

            modal.destroy()
          }
        },
        {
          label: '取消',
          onClick: () => modal.destroy()
        }
      ]
    });
  }//--------------------------------------------------------------------------------------

  deleterole(id:string) {
    this.roleservice.deleterole(id);
  }//--------------------------------------------------------------------------------------

  deleterolepermission(id:string) {
    this.roleservice.deleterolepermission(id);
  }

  updaterole(data:any) {
    const modal = this.modalService.create({
      nzTitle: "编辑角色信息",
      nzContent: updateroleComponent,
      nzComponentParams: {
        oldname: data.role_name
      },
      nzFooter: [
        {
          label: '确定',
          onClick: _data => {
            if (_data.name != null) {
              this.roleservice.updaterole(_data.name,data.id)
            }
            modal.destroy()
          }
        },
        {
          label: '取消',
          onClick: () => modal.destroy()
        }
      ]
    });
  }//--------------------------------------------------------------------------------------


}
//***************************************************************************************************************



@Component({
  selector: 'app - addrole',
  template: `
    <div>
    
    <input nz-input style="width: 300px" placeholder="角色名称" [(ngModel)]="name" />
    </div>
  `
})

export class addroleComponent {

  @Output() name: string;

  constructor(private modal: NzModalRef) {

  }
}//----------------------------------------------------------------------



@Component({
  selector: 'app - updaterole',
  template: `
    <div>
    <h3>角色名称:</h3>
    <input nz-input style="width: 300px" placeholder="角色名称" [(ngModel)]="name" />
    </div>
  `
})

export class updateroleComponent {
  @Input() oldname: string;
  @Output() name: string;

  constructor(private modal: NzModalRef) {

  }
  ngOnInit() {
    this.name = this.oldname;
  }
}//----------------------------------------------------------------------



@Component({
  selector: 'app - addrolepermission',
  template: `
    <div>
    <h3>为{{role_name}}增加权限：</h3>
    
    <nz-select
      [nzMaxTagCount]="3"
      [nzMaxTagPlaceholder]="tagPlaceHolder"
      style="width: 100%"
      nzMode="multiple"
      nzPlaceHolder="请选择"
      [(ngModel)]="listOfSelectedValue"
    >
      <nz-option *ngFor="let option of listOfOption" [nzLabel]="option.permission" [nzValue]="option.permission"></nz-option>
    </nz-select>
    <ng-template #tagPlaceHolder let-selectedList> and {{ selectedList.length }} more selected </ng-template>

    </div>
  `
})

export class addrolepermissionComponent {
  @Input() role_name: string;
  @Output() listOfSelectedValue: any;

  listOfOption; any;
  constructor(private modal: NzModalRef,private roleservice:RoleService) {
    
  }
  ngOnInit() {
    this.roleservice.getpermissionlist((callback: Response) => {
      this.listOfOption = callback.data;
    });
    
  }

}//------------------------------------------------------------------------------------------------------------------------------
