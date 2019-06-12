import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-safequit',
  templateUrl: './safequit.component.html',
  styleUrls: ['./safequit.component.scss']
})
export class SafequitComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    localStorage.setItem("token", null);
    this.router.navigateByUrl("/login");
  }

}
