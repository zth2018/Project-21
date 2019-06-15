import { Component } from '@angular/core';
import { UserService }from '../../api/user.service';
import { CourseService }from '../../api/course.service'
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  listofclass:any[]=[];

  constructor(private user_service:UserService,private course_service:CourseService) {
    
  }//-------------------------------------------------------------------------------------------------------------

  ngOnInit(): void {

    this.listofclass.push({
      "course":"课程",
      "class":"班级",
      "creator":"周某某",
      "id":"24241"
    },{
      "course":"课程2",
      "class":"班级2",
      "creator":"周某某",
      "id":"23111"
    });
  }//-------------------------------------------------------------------------------------------------------------------------

}//----------------------------------------------------------------------------------------------------------------
