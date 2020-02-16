import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { MeetComponent } from './meet/meet.component';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DcoinComponent } from './dcoin/dcoin.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component:AboutComponent },
  {path: 'meet', component: MeetComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'dcoin', component: DcoinComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
