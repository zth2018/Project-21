import { Component } from '@angular/core';
import { UserService }from '../../api/user.service';
import { CourseService }from '../../api/course.service';
import {Router}from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  user:any=[];
  listofclass:any[]=[];

  constructor(private user_service:UserService,private course_service:CourseService,private router:Router,private actionSheetController: ActionSheetController,public alertController: AlertController) {
    
  }//-------------------------------------------------------------------------------------------------------------

  ngOnInit(): void {
     this.refresh()
  }//-------------------------------------------------------------------------------------------------------------------------



  course(course_id:string,count:any,name:any,owner_id){
    this.course_service.getclasslist(localStorage.getItem("uid"),(callback:any)=>{
      this.listofclass=callback;
      var x=this.listofclass.findIndex((value:any,index:number)=>{
        if(value.id==course_id)return true;
      })
      localStorage.setItem("checkin_count",this.listofclass[x].checkin_count);
      localStorage.setItem("cid",course_id)
      localStorage.setItem("coursename",name)
      if(owner_id==localStorage.getItem("uid")){
        this.router.navigateByUrl("course-th")
      }else{
        this.router.navigateByUrl("course")
      }
    });
      
      
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: '选择',
      buttons: [{
        text: '创建班课',
        handler: () => {
          this.createclass()
        }
      }, {
        text: '加入班课',
        handler: () => {
         this.joinclass()
        }
      },  {
        text: '取消',
        role: 'cancel',
        handler: () => {
        }
      }]
    });
    await actionSheet.present();
  }//----------------------------------------------------------------------------------------------------------------------

  async createclass() {
    const alert = await this.alertController.create({
      header: '创建班课',
      inputs: [
        {
          name: 'course',
          type: 'text',
          placeholder: '课程'
        },
        {
          name: 'class',
          type: 'text',
          placeholder: '班级'
        }
      ],
      buttons: [
        {
          text: '提交',
          cssClass: 'secondary',
          handler: (data:any) => {
            this.course_service.addclass(data.class,data.course,this.user.id,this.user.name,(callback:any)=>{if(callback)this.refreshinfo()})
          }
        }, {
          text: '取消',
          handler: () => {
          }
        }
      ]
    });
    await alert.present();
  }



  async joinclass() {
    const alert = await this.alertController.create({
      header: '加入班课',
      inputs: [
        {
          name: 'cid',
          type: 'text',
          placeholder: '班课号'
        }
      ],
      buttons: [
        {
          text: '提交',
          cssClass: 'secondary',
          handler: (data:any) => {
          this.course_service.joinclass(this.user.id,data.cid,(callback:any)=>{if(callback)this.refreshinfo()})
          }
        }, {
          text: '取消',
          handler: () => {
          }
        }
      ]
    });
    await alert.present();
  }

  doRefresh(event){
    this.course_service.getclasslist(localStorage.getItem("uid"),(callback:any)=>{
      this.listofclass=callback;
      event.target.complete();
    });
  }

  refreshinfo(){
    this.course_service.getclasslist(localStorage.getItem("uid"),(callback:any)=>{
      this.listofclass=callback;
    });
  }

ngDoCheck(): void {
  //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
  //Add 'implements DoCheck' to the class.
  if(this.user.id!=localStorage.getItem("uid")){
    this.refresh();
  }
}

refresh(){
  this.course_service.getclasslist(localStorage.getItem("uid"),(callback:any)=>{
    this.listofclass=callback;
  });
  this.user_service.getpersoninfo(localStorage.getItem("uid"),(callback:any)=>{
      this.user=callback.data;
});
}

}//----------------------------------------------------------------------------------------------------------------
