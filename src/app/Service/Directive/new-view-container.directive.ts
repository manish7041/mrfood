import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNewViewContainer]'
})
export class NewViewContainerDirective {

  constructor(public ViewContainer:ViewContainerRef) { }

}
