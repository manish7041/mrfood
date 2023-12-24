import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMenuhover]'
})
export class MenuhoverDirective {

  constructor(private element:ElementRef, private render:Renderer2) { }
  
  @HostListener('mouseover') 
  onMouseEnter(){
    this.render.setStyle(this.element.nativeElement, 'background-color','#f86d22');
    this.render.setStyle(this.element.nativeElement, 'color','white')
  }
  @HostListener('mouseleave')
   onMouseLeave(){
    this.render.setStyle(this.element.nativeElement, 'background-color','#ffffff');
    this.render.setStyle(this.element.nativeElement, 'color','black')
   }
}
