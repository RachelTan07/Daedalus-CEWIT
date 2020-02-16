import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    trigger('endAnim', [
      state('starting', style({
        height: '150px'
      })),
      state('finished', style({
        opacity: 1,
      })),
      transition('finished => starting', [
        animate('.5s')
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'Daedalus';
  constructor(public router: Router){}

  isFinished =  false;

  finishAnimation(){
    this.isFinished = !this.isFinished;
  }

  ngOnInit() {
    setTimeout(() => {
      this.finishAnimation();
    }, 2000);
  }
}
