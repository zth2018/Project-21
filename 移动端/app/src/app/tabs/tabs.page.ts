import { Component } from '@angular/core';
import {UserService} from '../../api/user.service'
import {CourseService} from '../../api/course.service';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor( private userService:UserService,private courseService:CourseService)
     {
      this.courseService.refreshcourse();
      this.userService.refreshuser();
     }

     ngOnInit(): void {
       //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
       //Add 'implements OnInit' to the class.
       this.courseService.refreshcourse();
       this.userService.refreshuser();
     }


}
