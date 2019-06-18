import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: './pages/login/login.module#LoginPageModule' },
    { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
    { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
    { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
    { path: 'course', loadChildren: './pages/course/course.module#CoursePageModule' },
  { path: 'course-th', loadChildren: './pages/course-th/course-th.module#CourseThPageModule' },



   


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
