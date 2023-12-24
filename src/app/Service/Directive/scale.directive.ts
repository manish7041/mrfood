import { Directive,ElementRef,Renderer2,HostListener } from '@angular/core';

@Directive({
  selector: '[appScale]'
})
export class ScaleDirective {

  constructor(private element:ElementRef, private render:Renderer2) { }

  @HostListener('mouseover') 
  onMouseEnter(){
    this.render.setStyle(this.element.nativeElement, 'scale','1.2')
  }
  @HostListener('mouseleave')
   onMouseLeave(){
    this.render.setStyle(this.element.nativeElement, 'scale','1')
   }

}
