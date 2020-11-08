import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CanActiveGuardGuard } from './loginGuard/can-active-guard.guard';

const routes: Routes = [

  { path: '', component: LoginComponent },
{ path: 'home',component: HomeComponent,canActivate:[CanActiveGuardGuard] },
{ path: 'about',component: AboutComponent },
{ path: 'contact',component: ContactComponent },

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
