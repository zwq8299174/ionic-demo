import { Component } from '@angular/core';

/**
 * Generated class for the BannerComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'banner',
  templateUrl: 'banner.html'
})
export class BannerComponent {

  text: string;

  constructor() {
    console.log('Hello BannerComponent Component');
    this.text = 'Hello World';
  }

}
