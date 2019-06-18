import { Component } from '@angular/core';
import {UserService }from '../../api/user.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  user:any;
  name:string;
  gender:string;
  age:string;
  id_n:string;
  id:string;
  school:string;
  institution:string;
  listofschool:any[];
  role:string;
  listofinstitution:any[];
  listofrole:any[];
  listofroledisplay:any[];
  constructor(private userService:UserService) {
    this.id=localStorage.getItem("uid")
  }

  ngOnInit(): void {
    this.refresh()
  }//-----------------------------------------------------------------------------------------------------

  refreshinstitutionlist(){
    var x = this.listofschool.findIndex((value: any, index: number): boolean => {
      if (value.schoolname == this.school) return true;
    });
    if (x != -1) {
      this.listofinstitution = this.listofschool[x].institutions;
    }
    else {
      this.listofinstitution = [];
    }
  }//-------------------------------------------------------------------------------------------------------

  refreshschoollist(){
    this.userService.getallschool((callback:any)=>{
      this.listofschool=callback;
      this.refreshinstitutionlist();
    })
  }


  updatepersoninfo(){
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
    this.userService.updatepersoninfo(info);
  }

  
ngDoCheck(): void {
  //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
  //Add 'implements DoCheck' to the class.
  if(this.id!=localStorage.getItem("uid")){
     this.refresh()

  }

}

refresh(){
  this.id=localStorage.getItem("uid")
  this.userService.getpersoninfo(this.id,(callback:any)=>{
    this.user=callback.data;
    this.role = this.user.role;
    this.name = this.user.name;
    this.school = this.user.school;
    this.institution = this.user.institution;
    this.gender = this.user.gender;
    this.age = this.user.age;
    this.id = this.user.id;
    this.id_n = this.user.id_n;
    this.refreshschoollist();
    this.userService.getallrole((callback:any)=>{
      this.listofrole=callback;
      this.listofroledisplay=[];
      if(this.role!="管理员"){
      this.listofrole.forEach((value:any)=>{
          if(value.role_name!="管理员")this.listofroledisplay.push(value)
      })}else{
        this.listofroledisplay=this.listofrole;
      }
    })
  })
 
}


doRefresh(event){

  this.refresh();
  event.target.complete();
}


}//
