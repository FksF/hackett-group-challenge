import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOnlyNumbers]'
})
export class OnlyNumbersDirective {
  @Input() length: number = 8;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('input', ['$event'])
  onInputChange(event: any) {
    const initialValue = this.el.nativeElement.value;
    const sanitizedValue = this.sanitizeInput(initialValue);
    
    if (initialValue !== sanitizedValue) {
      this.renderer.setProperty(this.el.nativeElement, 'value', sanitizedValue);
      const evt = document.createEvent('Event');
      evt.initEvent('input', false, false);
      this.el.nativeElement.dispatchEvent(evt);
    }
  }

  sanitizeInput(value: string): string {
    let sanitizedValue = '';
    for (const char of value) {
      if (/^[0-9]$/.test(char)) {
        sanitizedValue += char;
      }
    }
    if (sanitizedValue.length > this.length) {
      sanitizedValue = sanitizedValue.substring(0, this.length);
    }
    return sanitizedValue;
  }
}
