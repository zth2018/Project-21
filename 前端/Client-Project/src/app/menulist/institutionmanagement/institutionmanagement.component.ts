import { Component, OnInit, Input, Output } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';
import { InstitutionService } from '../../services/institution.service';
import { Response } from '../../interface/response';
import {  school } from '../../interface/school';


@Component({
  selector: 'app-institutionmanagement',
  templateUrl: './institutionmanagement.component.html',
  styleUrls: ['./institutionmanagement.component.scss']
})
export class InstitutionmanagementComponent implements OnInit {
  searchValue = '';
  sortName: string | null = null;
  sortValue: string | null = null;
  listOfSchoolData: school[] = [];
  listOfDisplay: school[] = [];
  pushdata: school;
  visible: boolean = false;
  //data: school=null;
  //listOfChildrenData: any[] = [];
  //schoolname: string;
  //province: any;
  //city: any;
  constructor(private modalService: NzModalService,private institutionservice:InstitutionService) { }//------------------------------------------------



  ngOnInit() {
   

    this.institutionservice.getallschool((callback: Response) => {
      this.listOfSchoolData = callback.data;
      this.listOfDisplay = this.listOfSchoolData;
      //console.log(this.listofSchoolData);
    });//--------------------------------
    
    
  }//----------------------------------------------------------------------------------------------------

  addschool() {
    const modal = this.modalService.create({
      nzTitle: '添加学校',
      nzContent: addschoolComponent,
      nzComponentParams: {
      
      },
      nzFooter: [
        {
          label: '确定',
          onClick: data => {
    
            this.institutionservice.addschool(data.schoolname, data.province, data.city)
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

  

  addinsititution(school:any) {
    const modal = this.modalService.create({
      nzTitle: school.schoolname,
      nzContent: addinsititutionComponent,
      nzComponentParams: {
      },
      nzFooter: [
        {
          label: '确定',
          onClick: componentInstance => {
            if (componentInstance.name != null) {
              this.institutionservice.addinstitution(school.id, componentInstance.name)
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

    //modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
    //modal.afterClose.subscribe(result => console.log());
  }//----------------------------------------------------------------------------------------------------
  
  deleteinstitution(id: string) {
    this.institutionservice.deleteinstitution(id);
    
  }//-----------------------------------------------------------------------------------------------------

  deleteschool(id: string) {
    this.institutionservice.deleteschool(id);
    //this.refreshlist();
  }//-------------------------------------------------------------------------------------------------------

  editschool(input:school) {
    const modal = this.modalService.create({
      nzTitle: '编辑学校信息',
      nzContent: editschoolComponent,
      nzComponentParams: {
        data: input
      },
      nzFooter: [
        {
          label: '确定',
          onClick: data => {
            input.schoolname = data.schoolname
            input.province = data.province
            input.city=data.city
            this.institutionservice.updateschool(input)
            modal.destroy()
          }
        },
        {
          label: '取消',
          onClick: () => modal.destroy()
        }
      ]
    });
  }//--------------------------------------------------------------------------------------------------------


  editinstitution(id: string,oldname:string) {
    const modal = this.modalService.create({
      nzTitle: "编辑学院信息",
      nzContent: editinsititutionComponent,
      nzComponentParams: {
        oldname:oldname,
      },
      nzFooter: [
        {
          label: '确定',
          onClick: data => {
            if (data.name != null) {
                this.institutionservice.updateinstitution(id,data.name)
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
  }//-------------------------------------------------------------------------------------------------------



  refreshlist() {
    this.institutionservice.getallschool((callback: Response) => {
      this.listOfSchoolData = callback.data;
      this.search();
    });
    
  }//-------------------------------------------------------------------------------------------------------

  search() {
    this.listOfDisplay = [];
    this.listOfSchoolData.forEach((value:school) => {
      if (value.schoolname.includes(this.searchValue)) {
        this.listOfDisplay.push(value);
      }       
    });
  }//-----------------------------------------------------------------------------------------

  reset() {
    this.searchValue = "";
    this.listOfDisplay = this.listOfSchoolData;
  }//----------------------------------------------------------------------------------------------------














}//------------------------------------------------------------------------------------------------------------





@Component({
  selector: 'app - addinsititution',
  template: `
    <div>
    <h3>添加学院:</h3>
    <input nz-input style="width: 300px" placeholder="学院名称" [(ngModel)]="name" />
    </div>
  `
})

export class addinsititutionComponent {
  
  @Output() name: string;
  
  constructor(private modal: NzModalRef) {
    
  }
}//----------------------------------------------------------------------

@Component({
  selector: 'app - editinsititution',
  template: `
    <div>
    <h3>学院名称:</h3>
    <input nz-input style="width: 300px" placeholder="学院名称" [(ngModel)]="name" />
    </div>
  `
})

export class editinsititutionComponent {
  @Input() oldname: string;
  @Output() name: string;

  constructor(private modal: NzModalRef) {
   
  }
  ngOnInit() {
      this.name = this.oldname;
  }
}//----------------------------------------------------------------------


@Component({
  selector: 'app - addschool',
  template: `
    <div>
    <h3>学校名:</h3>
    <input nz-input style="width: 300px" placeholder="例：福州大学" [(ngModel)]="schoolname" />
    <h3>所属省份:</h3>
    <input nz-input style="width: 300px" placeholder="例：福建省" [(ngModel)]="province" />
    <h3>所在城市:</h3>
    <input nz-input style="width: 300px" placeholder="例：福州市" [(ngModel)]="city" />
    </div>
  `
})

export class addschoolComponent {
  @Output() schoolname: string=null;
  @Output() province: string=null;
  @Output() city: string=null;
  constructor(private modal: NzModalRef) {
    
  }
  ngOnInit() {    
    
  }
}//-----------------------------------------------------------------------


@Component({
  selector: 'app - editschool',
  template: `
    <div>
    <h3>学校名:</h3>
    <input nz-input style="width: 300px" placeholder="" [(ngModel)]="schoolname" />
    <h3>所属省份:</h3>
    <input nz-input style="width: 300px" placeholder="" [(ngModel)]="province" />
    <h3>所在城市:</h3>
    <input nz-input style="width: 300px" placeholder="" [(ngModel)]="city" />
    </div>
  `
})

export class editschoolComponent {
  @Input() data: school;
  @Output() schoolname: string = null;
  @Output() province: string = null;
  @Output() city: string = null;
  constructor(private modal: NzModalRef) {

  }
  ngOnInit() {
    this.schoolname = this.data.schoolname;
    this.province = this.data.province;
    this.city = this.data.city;
  }
}//-----------------------------------------------------------------------
