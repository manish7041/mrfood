import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appSearchoptionhover]'
})
export class SearchoptionhoverDirective {

  constructor(private element:ElementRef, private render:Renderer2) { }

  @HostListener('mouseenter')  onMouseEnter(){
       this.render.setStyle(this.element.nativeElement,'border', '2px solid #f9f984');
       this.render.setStyle(this.element.nativeElement,'backgroundColor', '#ff894a');
       this.render.setStyle(this.element.nativeElement,'color', 'white') 


  }
  @HostListener('mouseleave')  onMouseLeave(){
    this.render.setStyle(this.element.nativeElement,'border', '1px solid grey');
    this.render.setStyle(this.element.nativeElement,'backgroundColor', 'white');
    this.render.setStyle(this.element.nativeElement,'color', 'black')
   }



}

