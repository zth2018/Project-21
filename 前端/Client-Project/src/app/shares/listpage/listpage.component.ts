import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";





@Component({
  selector: 'app-listpage',
  templateUrl: './listpage.component.html',
  styleUrls: ['./listpage.component.scss']
})
export class ListpageComponent implements OnInit {



  constructor(private http:HttpClient) { }

  //editCache: { [key: string]: any } = {};
  listOfUser: any;

  //startEdit(id: string): void {
  //  this.editCache[id].edit = true;
  //}

  //cancelEdit(id: string): void {
  //  const index = this.listOfData.findIndex(item => item.id === id);
  //  this.editCache[id] = {
  //    data: { ...this.listOfData[index] },
  //    edit: false
  //  };
  //}

  //saveEdit(id: string): void {
  //  const index = this.listOfData.findIndex(item => item.id === id);
  //  Object.assign(this.listOfData[index], this.editCache[id].data);
  //  this.editCache[id].edit = false;
  //}

  //updateEditCache(): void {
  //  this.listOfData.forEach(item => {
  //    this.editCache[item.id] = {
  //      edit: false,
  //      data: { ...item }
  //    };
  //  });
  //}


  ngOnInit() {
    this.http.get<any>("http://localhost:8080/class/getuser?class_id=1", { responseType: "json" }).subscribe(data => {
      this.listOfUser = data;
    });
   
  }

  //refreshStatus(): void {
  //  const validData = this.listOfData.filter(value => !value.disabled);
  //  const allChecked = validData.length > 0 && validData.every(value => value.checked === true);
  //  const allUnChecked = validData.every(value => !value.checked);
  //  this.allChecked = allChecked;
  //  this.indeterminate = !allChecked && !allUnChecked;
  //}

  //checkAll(value: boolean): void {
  //  this.listOfData.forEach(data => {
  //    if (!data.disabled) {
  //      data.checked = value;
  //    }
  //  });
  //  this.refreshStatus();
  //}

}







//for (let i = 0; i < 100; i++) {
//  this.listOfData.push({
//    id: `${i}`,
//    name: `Edrward ${i}`,
//    age: 32,
//    address: `London Park no. ${i}`,
//    checked: false

//  });
//}
