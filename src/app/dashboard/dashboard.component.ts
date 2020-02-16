import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  scheduling = true;

  switch(tab){
    this.scheduling = false;
    if(tab=='logout'){
          this.router.navigateByUrl('');
    }
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}
