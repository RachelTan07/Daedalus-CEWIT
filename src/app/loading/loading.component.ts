import { Component, OnInit, NgZone } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.sass']
})
export class LoadingComponent implements OnInit {
  options: AnimationOptions = {
      path: '/assets/data.json',
      loop: false
    };

    styles: Partial<CSSStyleDeclaration> = {
      margin: '0 auto',
    };

    private animationItem: AnimationItem;

    constructor(private ngZone: NgZone) {}

    animationCreated(animationItem: AnimationItem): void {
      this.animationItem = animationItem;
    }

    stop(): void {
      this.ngZone.runOutsideAngular(() => this.animationItem.stop());
    }

    ngOnInit() {
    }
}
