import { Directive } from '@angular/core';

/**
 * Generated class for the TestDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: '[test]' // Attribute selector
})
export class TestDirective {

  constructor() {
    console.log('Hello TestDirective Directive');
  }

}
