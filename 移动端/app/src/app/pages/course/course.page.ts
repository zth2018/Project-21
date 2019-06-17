import { Component, OnInit } from '@angular/core';
import {Router}from '@angular/router';
import{CourseService}from '../../../api/course.service';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
})
export class CoursePage implements OnInit {
  cid:string;
  uid:any;
  listofmember:any[]=[];
  member_n:any;
  checkin_count:any;
  coursename:any;
  usercheckcount:any;
  memberid:any;
  constructor(private router:Router,private courseService:CourseService,private actionSheetController: ActionSheetController,public alertController: AlertController) {
    this.cid=localStorage.getItem("cid")
    this.checkin_count=localStorage.getItem("checkin_count")
    this.coursename=localStorage.getItem("coursename")
    this.uid=localStorage.getItem("uid")
   }

  ngOnInit() {
    this.courseService.getuserlistbycid(this.cid,(callback:any)=>{
        this.listofmember=callback;
        this.member_n=this.listofmember.length;
        var x=this.listofmember.findIndex((value: any, index: number): boolean => {
         if (value.uid == this.uid) return true;
         })
 
         this.memberid=this.listofmember[x].id;
         this.usercheckcount=this.listofmember[x].checkin_count;
    })
  }

  checkin(){ 
    
    this.courseService.checkin(this.usercheckcount+1,this.memberid);
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
      var x=this.listofmember.findIndex((value: any, index: number): boolean => {
       if (value.uid == this.uid) return true;
       })
       this.memberid=this.listofmember[x].id;
       this.usercheckcount=this.listofmember[x].checkin_count;
       event.target.complete();
       })
    })
  }
  

  async more() {
    const actionSheet = await this.actionSheetController.create({
      header: '选择',
      buttons: [{
        text: '退出班课',
        handler: () => {
          this.courseService.quitclass(this.memberid,(callback:any)=>{
            if(callback){this.router.navigateByUrl("/tabs")}
          })

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

}
