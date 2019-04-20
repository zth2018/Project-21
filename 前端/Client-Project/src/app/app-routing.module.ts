import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { SignupComponent } from './pages/signup/signup.component';
import { Page404Component } from './pages/page404/page404.component';
import { Page403Component } from './pages/page403/page403.component';
import { Page500Component } from './pages/page500/page500.component';
import { LockpageComponent } from './pages/lockpage/lockpage.component';
import { ListpageComponent } from './shares/listpage/listpage.component';
import { EditpageComponent } from './shares/editpage/editpage.component';
import { MycreatedComponent } from './menulist/myclass/mycreated/mycreated.component';
import { MyjoinedComponent } from './menulist/myclass/myjoined/myjoined.component';


const routes: Routes = [
  
  {path: 'login', component: LoginComponent },
  {path: 'homepage', component: HomeComponent,
     children: [
       { path: 'listpage', component: ListpageComponent },
       { path: 'editpage', component: EditpageComponent },
       { path: 'mycreatedclass', component: MycreatedComponent },
       { path: 'myjoinedclass', component: MyjoinedComponent },
    ]},
  {path: 'forgetpassword', component: ForgotpasswordComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'lockpage', component: LockpageComponent},
  {path: '404', component: Page404Component},
  {path: '403', component: Page403Component},
  {path: '500', component: Page500Component},
  {path: '', component: LoginComponent},
  {path: '**', redirectTo:'404'},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

