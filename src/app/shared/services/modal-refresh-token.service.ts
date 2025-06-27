import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalRefreshTokenService {
  private isModalVisibleSubject = new BehaviorSubject<boolean>(false);
  isModalVisible$ = this.isModalVisibleSubject.asObservable();

  constructor() { }

  show() {
    this.isModalVisibleSubject.next(true);
  }

  hide() {
    this.isModalVisibleSubject.next(false);
  }
}
