import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  listofclass:any[]=[];
  constructor() {
    
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
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
  }


}//-------------------------------------------------------------------------------------------------------------------------
