import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.sass']
})
export class DoctorDashboardComponent implements OnInit {
  scheduling = true;
  info = false;

  switch(tab){
    if(tab=='logout'){
        this.router.navigateByUrl('');
    }else if(tab=='scheduling'){
        this.scheduling = true;
        this.info = false;
    }else if(tab=='info'){
        this.scheduling = false;
        this.info = true;
    }
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
}
