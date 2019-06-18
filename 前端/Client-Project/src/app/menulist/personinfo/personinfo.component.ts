import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../services/role.service';
import { InstitutionService } from '../../services/institution.service';
import { UserService } from '../../services/User.service';

@Component({
  selector: 'app-personinfo',
  templateUrl: './personinfo.component.html',
  styleUrls: ['./personinfo.component.scss']
})
export class PersoninfoComponent implements OnInit {
  id_n: string;
  role: string;
  name: string;
  school: string;
  institution: string;
  gender: string;
  age: string;
  id: string;
  user: any;
  listofrole: any[]=[];
  listofschool: any[] = [];
  listofinstitution: any[] = [];
  listofroledisplay: any[] = [];
  constructor(private roleservice: RoleService, private institutionservice: InstitutionService,private userservice:UserService) { }

  ngOnInit() {
    this.id= localStorage.getItem("uid");
    this.refresh();

  }//------------------------------------------------------------------------------------------------------------------------

  updatepersoninfo() {
    var info = {
      "name": this.name,
      "school": this.school,
      "institution": this.institution,
      "gender": this.gender,
      "age": this.age,
      "role": this.role,
      "id": this.id,
      "id_n":this.id_n
    };
    this.userservice.updatepersoninfo(info);
  }//------------------------------------------------------------------------------------------------------------------------

  refresh() {
    this.userservice.getpersoninfo(this.id, (callback: any) => {
      this.user = callback.data;
      this.role = this.user.role;
      this.name = this.user.name;
      this.school = this.user.school;
      this.institution = this.user.institution;
      this.gender = this.user.gender;
      this.age = this.user.age;
      this.id = this.user.id;
      this.id_n = this.user.id_n;
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

    });
    this.roleservice.getallrole((callback: any) => {
      this.listofrole = callback.data;
      if (this.role != "管理员") {
        this.listofrole.forEach((value: any, index: any) => {
          if (value.role_name != "管理员")
            this.listofroledisplay.push(this.listofrole[index]);
        })
      } else {
        this.listofroledisplay = this.listofrole;
      }

    });

    //this.institutionservice.getallschool((callback: any) => {
    //  this.listofschool = callback.data;
    //  var x = this.listofschool.findIndex((value: any, index: number): boolean => {
    //    if (value.schoolname == this.user.school) return true;
    //  });
    //  if (x != -1) {
    //    this.listofinstitution = this.listofschool[x].institutions;
    //  }
    //  else {
    //    this.listofinstitution = [];
    //  }
    //});
  }//--------------------------------------------------------------------------------------------------------------------------

  institutionlist(data: string) {

    var x = this.listofschool.findIndex((value: any, index: number): boolean => {
      if (value.schoolname == data) return true;
    });
    if (x != -1) {
      this.listofinstitution = this.listofschool[x].institutions;
      this.institution = null;
    }
    else {
      this.listofinstitution = [];
    }
  }//---------------------------------------------------------------------------------------------------------------------------

  //disable(option: any):boolean {
  //  if (option.role_name == "管理员") return false;
  //  else return true;
  //}

}//------------------------------------------------------------------------------------------
