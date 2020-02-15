import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

  home = true;
  doctors = false;
  patients = false;
  providers = false;
  logIn = false;

  tab(tabName){
      if(tabName == 'home'){
        this.home = true;
        this.doctors = false;
        this.patients = false;
        this.providers = false;
        this.logIn = false;
      }
      else if(tabName == 'doctors'){
        this.home = false;
        this.doctors = true;
        this.patients = false;
        this.providers = false;
        this.logIn = false;
      }
      else if(tabName == 'patients'){
        this.home = false;
        this.doctors = false;
        this.patients = true;
        this.providers = false;
        this.logIn = false;
      }
      else if(tabName == 'providers'){
        this.home = false;
        this.doctors = false;
        this.patients = false;
        this.providers = true;
        this.logIn = false;
      }
      else if(tabName == 'logIn'){
        this.home = false;
        this.doctors = false;
        this.patients = false;
        this.providers = false;
        this.logIn = true;
      }
  }


  constructor() { }

  ngOnInit() {
  }

}
