import { Component, OnInit } from '@angular/core';
import {Router}from '@angular/router';
import{CourseService}from '../../../api/course.service';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-course-th',
  templateUrl: './course-th.page.html',
  styleUrls: ['./course-th.page.scss'],
})
export class CourseThPage implements OnInit {

  cid:string;
  listofmember:any[]=[];
  member_n:any;
  checkin_count:any;
  coursename:any;
  constructor(private router:Router,private courseService:CourseService,private actionSheetController: ActionSheetController,public alertController: AlertController) {
    this.cid=localStorage.getItem("cid")
    this.checkin_count=localStorage.getItem("checkin_count")
    this.coursename=localStorage.getItem("coursename")
   }

  ngOnInit() {
    this.courseService.getuserlistbycid(this.cid,(callback:any)=>{
        this.listofmember=callback;
        this.member_n=this.listofmember.length;
    })
  }

  checkin(){
    this.courseService.checkin_th()
  }

  doRefresh(event){
     this.courseService.getclasslist(localStorage.getItem("uid"),(callback:any)=>{
       var listofclass=callback;
       var x=listofclass.findIndex((value:any,index:number)=>{
          if(value.id==this.cid)return true;
         })
       this.checkin_count=listofclass[x].checkin_count;
       this.courseService.getuserlistbycid(this.cid,(callback:any)=>{
       this.listofmember=callback;
       this.member_n=this.listofmember.length;
       event.target.complete();
        })
      });
    }

    async more() {
      const actionSheet = await this.actionSheetController.create({
        header: '选择',
        buttons: [{
          text: '结束班课',
          handler: () => {
              this.courseService.closeclass(this.cid,(callback:any)=>{if(callback)this.router.navigateByUrl("/tabs")})
          }
        }, {
          text: '取消',
          role: 'cancel',
          handler: () => {
          }
        }]
      });
      await actionSheet.present();
    }//----------------------------------------------------------------------------------------------------------------------


   checkin_sup(id:string,count:string){
     this.courseService.checkin_sup(id,count+1)
   }

   refresh(){
    this.courseService.getuserlistbycid(this.cid,(callback:any)=>{
      this.listofmember=callback;
      this.member_n=this.listofmember.length;
   })
  }
}




