import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { MeetComponent } from './meet/meet.component';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { DashboardComponent } from './dashboard/dashboard.component';
=======
import { DcoinComponent } from './dcoin/dcoin.component';
>>>>>>> 9ae3f54d974dead46ff63c122a36f151031083b7

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component:AboutComponent },
  {path: 'meet', component: MeetComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'login', component: LoginComponent},
<<<<<<< HEAD
  {path: 'dashboard', component: DashboardComponent}
=======
  {path: 'dcoin', component: DcoinComponent}
>>>>>>> 9ae3f54d974dead46ff63c122a36f151031083b7
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
