import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHeaderHover]'
})
export class HeaderHoverDirective {

  constructor(private element:ElementRef, private render:Renderer2) { }

  @HostListener('mouseover') 
  onMouseEnter(){
    this.render.setStyle(this.element.nativeElement, 'color','grey')
    this.render.setStyle(this.element.nativeElement, 'cursor','pointer')

  }
  @HostListener('mouseleave')
   onMouseLeave(){
    this.render.setStyle(this.element.nativeElement, 'color','black')
   }
}
