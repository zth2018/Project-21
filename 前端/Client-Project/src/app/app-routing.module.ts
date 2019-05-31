import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './home/home.component';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { SignupComponent } from './pages/signup/signup.component';
import { Page404Component } from './pages/page404/page404.component';
import { Page403Component } from './pages/page403/page403.component';
import { Page500Component } from './pages/page500/page500.component';
import { LockpageComponent } from './pages/lockpage/lockpage.component';
import { ListpageComponent } from './shares/listpage/listpage.component';
import { EditpageComponent } from './shares/editpage/editpage.component';
import { MycreatedComponent } from './menulist/MyClass/created/mycreated.component';
import { MyjoinedComponent } from './menulist/MyClass/joined/myjoined.component';
import { MemberlistForSComponent } from './listpages/memberlist-for-s/memberlist-for-s.component';
import { UsermanagementComponent } from './menulist/usermanagement/usermanagement.component';
import { InstitutionmanagementComponent } from './menulist/institutionmanagement/institutionmanagement.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  
  {path: 'login', component: LoginComponent },
  {
    path: 'homepage', component: HomeComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard],
    children: [
       { path: 'usermanagement', component: UsermanagementComponent },
       { path: 'institutionmanagement', component: InstitutionmanagementComponent },
       { path: 'listpage', component: ListpageComponent },
       { path: 'editpage', component: EditpageComponent },
       { path: 'mycreatedclass', component: MycreatedComponent },
       { path: 'myjoinedclass', component: MyjoinedComponent },
       { path: 'memlistforstudent/:class_id', component: MemberlistForSComponent },
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

