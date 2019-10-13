import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {
  constructor(Element: ElementRef) {
    Element.nativeElement.innerHTML="Hello, I'm Custom Directive. ";
 }
}