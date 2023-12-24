import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appUserhover]'
})
export class UserhoverDirective {

  constructor(private element:ElementRef, private render:Renderer2) { }
  

  @HostListener('mouseover')  onMouseOver(){
    this.render.setStyle(this.element.nativeElement, 'fontWeight', '650')
  }
  @HostListener('mouseleave')  onMouseLeave(){
    this.render.setStyle(this.element.nativeElement, 'fontWeight', '400')
  }
}
