import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-memberlist-for-s',
  templateUrl: './memberlist-for-s.component.html',
  styleUrls: ['./memberlist-for-s.component.scss']
})
export class MemberlistForSComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute,
    private router: Router) { }

  listOfStudents: any;

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('class_id');
    this.http.get<any>("http://localhost:8080/class/getuser?class_id=" + id, { responseType: "json" }).subscribe(data => {
      this.listOfStudents = data;
    });
  }

}
