import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StepsService {
  private currentStepSubject = new BehaviorSubject<number>(0);
  currentStep$ = this.currentStepSubject.asObservable();
  private showStepSubject = new BehaviorSubject<boolean>(false);
  showStep$ = this.showStepSubject.asObservable();

  constructor() { }

  setStep(step: number) {
    this.currentStepSubject.next(step);
  }

  showStep(show: boolean) {
    this.showStepSubject.next(show);
  }

  hideStep() {
    this.showStepSubject.next(false);
  }
}
