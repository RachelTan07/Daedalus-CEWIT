import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

  home = true;
  about = false;
  team = false;
  coin = false;
  logIn = false;

  tab(tabName){
      if(tabName == 'home'){
        this.home = true;
        this.about = false;
        this.team = false;
        this.coin = false;
        this.logIn = false;
      }
      else if(tabName == 'about'){
        this.home = false;
        this.about = true;
        this.team = false;
        this.coin = false;
        this.logIn = false;
      }
      else if(tabName == 'team'){
        this.home = false;
        this.about = false;
        this.team = true;
        this.coin = false;
        this.logIn = false;
      }
      else if(tabName == 'coin'){
        this.home = false;
        this.about = false;
        this.team = false;
        this.coin = true;
        this.logIn = false;
      }
      else if(tabName == 'logIn'){
        this.home = false;
        this.about = false;
        this.team = false;
        this.coin = false;
        this.logIn = true;
      }
  }


  constructor() { }

  ngOnInit() {
  }

}
