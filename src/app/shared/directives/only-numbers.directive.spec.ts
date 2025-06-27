import { ElementRef, Renderer2 } from '@angular/core';
import { OnlyNumbersDirective } from './only-numbers.directive';

describe('AccountNumberDirective', () => {
  const mockElementRef = new ElementRef(document.createElement('input'));
  const mockRenderer = jasmine.createSpyObj('Renderer2', ['addClass', 'removeClass', 'setAttribute']);

  it('should create an instance', () => {
    const directive = new OnlyNumbersDirective(mockElementRef, mockRenderer);
    expect(directive).toBeTruthy();
  });
});

