import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dentist-dashboard',
  templateUrl: './dentist-dashboard.component.html',
  styleUrls: ['./dentist-dashboard.component.sass']
})
export class DentistDashboardComponent implements OnInit {
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
