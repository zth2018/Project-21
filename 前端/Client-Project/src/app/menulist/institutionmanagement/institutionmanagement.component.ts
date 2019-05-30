import { Component, OnInit, Input, Output } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';
import { InsititutionService } from '../../services/insititution.service';
import { Response } from '../../interface/response';
import {  school } from '../../interface/school';
@Component({
  selector: 'app-institutionmanagement',
  templateUrl: './institutionmanagement.component.html',
  styleUrls: ['./institutionmanagement.component.scss']
})
export class InstitutionmanagementComponent implements OnInit {
  listofSchoolData: school[];
  listOfParentData: any[] = [];
  listOfChildrenData: any[] = [];
  constructor(private modalService: NzModalService,private institutionservice:InsititutionService) { }

  ngOnInit() {
   

    this.institutionservice.getallschool((callback: Response) => {
      this.listofSchoolData = callback.data;
      //console.log(this.listofSchoolData);
    });//--------------------------------
    
    
  }//-------------------

  addinsititution(school:any) {
    const modal = this.modalService.create({
      nzTitle: school.schoolname,
      nzContent: addinsititutionComponent,
      nzComponentParams: {
        school_id: school.id
      },
      nzFooter: [
        {
          label: '确定',
          onClick: componentInstance => {
            this.institutionservice.addinstitution(school.id, componentInstance.insititution)
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

    modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
    modal.afterClose.subscribe(result => console.log());
  }//--------------------
  
  deleteinstitution(id: string) {
    this.institutionservice.deleteinstitution(id);
    
  }//-------------------------------

  refreshlist() {
    //this.institutionservice.getallschool((callback: Response) => {
    //  this.listofSchoolData = callback.data;
    //});
    //this.listofSchoolData.splice();
  }//--------------------------------



}//---------------------





@Component({
  selector: 'app - addinsititution',
  template: `
    <div>
    <h3>添加学院：</h3>
    <input nz-input placeholder="学院名称" [(ngModel)]="insititution" />
    </div>
  `
})

export class addinsititutionComponent {
  @Input() school_id: string;
  @Output() insititution: string;
  
  constructor(private modal: NzModalRef) {
    
  }
}//----------------------------
