import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appViewcontainer]'
})
export class ViewcontainerDirective {

  constructor(public viewcontainerref:ViewContainerRef) { }

}
