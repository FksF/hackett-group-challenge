import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNumericInputMask]',
})
export class NumericInputMaskDirective {
  @Input() decimalPlaces: number = 2;

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInputChange(event: any) {
    this.formatValue(event.target.value);
  }

  @HostListener('blur', ['$event'])
  onBlur(event: any) {
    this.formatValue(this.el.nativeElement.value);
  }

  private formatValue(inputValue: string): void {
    let cleanValue = inputValue.replace(/[^0-9.]/g, '');
    const dotCount = (cleanValue.match(/\./g) || []).length;
    if (dotCount > 1) {
      cleanValue = cleanValue.replace(/\.+/, '.');
    }

    const parts = cleanValue.split('.');
    if ( parts.length > 1 && parts[1].length > this.decimalPlaces) {
      parts[1] = parts[1].substring(0, this.decimalPlaces);
      cleanValue = parts.join('.');
    }

    if (cleanValue.startsWith('.') && cleanValue !== '') {
      cleanValue = '0' + cleanValue;
    }

    if (cleanValue.startsWith('0') && cleanValue.length > 1 && !cleanValue.startsWith('0.')) {
      cleanValue = cleanValue.replace(/^0+/, '');
    }

    let formattedValue = '';
    const integerPart = cleanValue.split('.')[0];

    if (integerPart) {
      formattedValue = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    if (cleanValue.includes('.')) {
      formattedValue += '.' + cleanValue.split('.')[1];
    }

    this.el.nativeElement.value = formattedValue;
  }
}
