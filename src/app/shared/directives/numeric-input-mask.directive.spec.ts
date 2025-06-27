import { ElementRef } from '@angular/core';
import { NumericInputMaskDirective } from './numeric-input-mask.directive';

describe('NumericInputMaskDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = new ElementRef(document.createElement('input'));
    const directive = new NumericInputMaskDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
