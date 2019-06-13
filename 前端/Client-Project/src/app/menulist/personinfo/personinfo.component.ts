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

  role: string;
  name: string;
  school: string;
  institution: string;
  gender: string;
  age: string;
  id: string;
  user: any;
  listofrole: any;
  listofschool: any[] = [];
  listofinstitution: any[] = [];

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
      "id": this.id
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
    });
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
  }

}//------------------------------------------------------------------------------------------
