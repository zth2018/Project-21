import { Component,OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import {Router}from '@angular/router';
import { AlertController } from '@ionic/angular';
import {UserService}from '../../api/user.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  listofclass:any[]=[];
  customActionSheetOptions: any;
  customAlertOptions: any ;
  customPopoverOptions: any;
  constructor(private actionSheetController: ActionSheetController,private router:Router,private alertController:AlertController,private userService:UserService) {
  
  }

  ngOnInit(): void {
   
  }

  safequit(){
      localStorage.removeItem("password")
      this.router.navigateByUrl("/login")
  }
  
  async changepassword() {
    const alert = await this.alertController.create({
      header: '修改密码',
      inputs: [
        {
          name: 'old',
          type: 'password',
          placeholder: '原密码'
        },
        {
          name: 'new',
          type: 'password',
          placeholder: '新密码'
        },{
          name: 'new_confirm',
          type: 'password',
          placeholder: '新密码确认'
        }
      ],
      buttons: [
        {
          text: '提交',
          cssClass: 'secondary',
          handler: (data:any) => {
            this.userService.changerpassword(data.old,data.new,data.new_confirm);
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




}//-------------------------------------------------------------------------------------------------------------------------
