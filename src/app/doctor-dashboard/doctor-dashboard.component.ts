import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.sass']
})
export class DoctorDashboardComponent implements OnInit {
  scheduling = true;

  switch(tab){
    if(tab=='logout'){
        this.router.navigateByUrl('');
    }else if(tab=='scheduling'){
        this.scheduling = true;
    }else{
        this.scheduling = false;
    }
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
}
