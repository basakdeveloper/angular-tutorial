import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class AppDropDownDirective {

  @HostBinding('class.open') isOpen = false;

  constructor() { }

  @HostListener('click') clickElement(elemRef: ElementRef) {
    this.isOpen = !this.isOpen;
  }
}
