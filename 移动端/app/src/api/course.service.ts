import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { environment } from '../environments/environment';
import { Router }from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  serveurl: any = environment.ServeUrl;
  httpOptions: any;
  account: string;
  constructor(private http:HttpClient,private router:Router) {
    this.account = localStorage.getItem("account");
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem("token")
      })
    };
   }//--------------------------------------------------------------------------------------------------


   getclasslist(uid:string,callback){
    this.http.get(this.serveurl + "/class?account=" + this.account+"&uid="+uid,this.httpOptions).subscribe((data: any) => {
        callback(data.data);
    });
   }//--------------------------------------------------------------------------------------------------------

   addclass(classname:string,course:string,uid:string,ownername:string,callback){
     var t_class={"classname":classname,"coursename":course,"owner_id":uid,"owner_name":ownername};
     this.http.post(this.serveurl+"/class?account="+this.account,t_class,this.httpOptions).subscribe((data:any)=>{
       if(data.result){
         alert("创建班课成功")
       }else{
         alert(data.message)
       }
       callback(data.result)
     },error=>{alert("请重新登陆")}
     )
   }

   joinclass(uid:string,cid:string,callback){
    
     this.http.post(this.serveurl+"/classinfo?account="+this.account+"&uid="+uid+"&cid="+cid,null,this.httpOptions).subscribe((data:any)=>{
       if(data.result){
         alert("加入班课成功")
       }else{
         alert(data.message)
       }
       callback(data.result)
     },error=>{alert("请重新登陆")})
   }


   getuserlistbycid(cid:string,callback){
     this.http.get(this.serveurl+"/classinfo?account="+this.account+"&cid="+cid,this.httpOptions).subscribe((data:any)=>{
       callback(data.data);
     })
   }


   checkin_th(){
     var cid=localStorage.getItem("cid");
    this.http.post(this.serveurl+"/checkin?account="+this.account+"&cid="+cid,null,this.httpOptions).subscribe((data:any)=>{
      alert(data.message)
     
    },error=>{alert("请重新登陆")})
   }

   checkin(count:any,id:any){
    var cid=localStorage.getItem("cid");
    this.http.get(this.serveurl+"/checkin?account="+this.account+"&id="+id+"&cid="+cid+"&count="+count,this.httpOptions).subscribe((data:any)=>{
      alert(data.message)
      
    },error=>{alert("请重新登陆")})
   }

   quitclass(mid:string,callback){
     this.http.delete(this.serveurl+"/classinfo?account="+this.account+"&mid="+mid,this.httpOptions).subscribe((data:any)=>{
      alert(data.message)
      callback(data.result)
    },error=>{alert("请重新登陆")})
   }

   closeclass(cid:string,callback){
    this.http.delete(this.serveurl+"/class?account="+this.account+"&cid="+cid,this.httpOptions).subscribe((data:any)=>{
      alert(data.message)
      callback(data.result)
    },error=>{alert("请重新登陆")})
   }

   checkin_sup(id:string,checkin_count:string){
     this.http.patch(this.serveurl+"/checkin?account="+this.account+"&id="+id+"&count="+checkin_count,null,this.httpOptions).subscribe((data:any)=>{
       alert(data.message)
     },error=>{alert("请重新登陆")})
   }

   refreshcourse(){
    this.account = localStorage.getItem("account");
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem("token")
      })
    };
   }


}//-----------------------------------------------------------------------------------
