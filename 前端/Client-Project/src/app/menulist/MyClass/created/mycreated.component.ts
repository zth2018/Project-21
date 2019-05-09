import { Component, OnInit } from '@angular/core';

import { UserService } from '../../../services/User.service';
import { ClassService } from '../../../services/class.service';
import { environment } from '../../../../environments/environment';
import { Observable } from "rxjs";




@Component({
  selector: 'app-mycreated',
  templateUrl: './mycreated.component.html',
  styleUrls: ['./mycreated.component.scss']
})
export class MycreatedComponent implements OnInit {

  constructor( private User: UserService,private T_class:ClassService) {

  }



  ngOnInit() {




  }


}
