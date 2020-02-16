import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { MeetComponent } from './meet/meet.component';
const routes: Routes = [
  {path: 'about', component:AboutComponent },
  {path: 'meet', component: MeetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
