import { Component } from '@angular/core';

/**
 * Generated class for the MyListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'my-list',
  templateUrl: 'my-list.html'
})
export class MyListComponent {

  text: string;

  constructor() {
    console.log('Hello MyListComponent Component');
    this.text = 'Hello World';
  }

}
