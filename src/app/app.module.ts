import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { MeetComponent } from './meet/meet.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { FormsModule } from '@angular/forms';

//Components
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';

//Angular Material
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import { AuthComponent } from './auth/auth.component';
import { FooterComponent } from './footer/footer.component';
<<<<<<< HEAD
import { DashboardComponent } from './dashboard/dashboard.component';
=======
import { DcoinComponent } from './dcoin/dcoin.component';
>>>>>>> 9ae3f54d974dead46ff63c122a36f151031083b7


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MeetComponent,
    NavComponent,
    LoginComponent,
    HomeComponent,
    CalendarComponent,
    AuthComponent,
    FooterComponent,
<<<<<<< HEAD
    DashboardComponent,
=======
    DcoinComponent
>>>>>>> 9ae3f54d974dead46ff63c122a36f151031083b7
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    HttpModule,
    FullCalendarModule,
    MatGridListModule,
    MatDividerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
