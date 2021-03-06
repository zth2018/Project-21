import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './components/head/head.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { SignupFormComponent } from './forms/signup-form/signup-form.component';
import { Page404Component } from './pages/page404/page404.component';
import { Page403Component } from './pages/page403/page403.component';
import { Page500Component } from './pages/page500/page500.component';
import { ListpageComponent } from './shares/listpage/listpage.component';
import { EditpageComponent } from './shares/editpage/editpage.component';
import { FogotpasswordFormComponent } from './forms/fogotpassword-form/fogotpassword-form.component';
import { UsermanagementComponent, adduserComponent, updateuserComponent } from './menulist/usermanagement/usermanagement.component';
import { InstitutionmanagementComponent, addinsititutionComponent, addschoolComponent, editschoolComponent, editinsititutionComponent } from './menulist/institutionmanagement/institutionmanagement.component';
import { RolemanagementComponent, addroleComponent, updateroleComponent, addrolepermissionComponent } from './menulist/rolemanagement/rolemanagement.component';

import { SafequitComponent } from './menulist/safequit/safequit.component';
import { ChangepasswordComponent } from './menulist/changepassword/changepassword.component';
import { PersoninfoComponent } from './menulist/personinfo/personinfo.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';


//import { UserService } from './services/User.service';


registerLocaleData(zh);



@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    LoginComponent,
    SignupComponent,
    ForgotpasswordComponent,
    HomeComponent,
    LoginFormComponent,
    SignupFormComponent,
    Page404Component,
    Page403Component,
    Page500Component,
    ListpageComponent,
    EditpageComponent,
    FogotpasswordFormComponent,
    UsermanagementComponent,
    InstitutionmanagementComponent,
    RolemanagementComponent,
    addinsititutionComponent,
    addschoolComponent,
    editschoolComponent,
    editinsititutionComponent,
    addroleComponent,
    updateroleComponent,
    addrolepermissionComponent,
    SafequitComponent,
    adduserComponent,
    updateuserComponent,
    ChangepasswordComponent,
    PersoninfoComponent,
    WelcomeComponent
  ],
  entryComponents: [
    addinsititutionComponent,
    addschoolComponent,
    editschoolComponent,
    editinsititutionComponent,
    addroleComponent,
    updateroleComponent,
    addrolepermissionComponent,
    adduserComponent,
    updateuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
