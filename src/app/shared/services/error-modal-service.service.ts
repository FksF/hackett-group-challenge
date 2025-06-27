import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ErrorBody } from '../models/error.interface';

@Injectable({
  providedIn: 'root'
})
export class ErrorModalService {
  private isModalVisibleSubject = new BehaviorSubject<boolean>(false);
  isModalVisible$ = this.isModalVisibleSubject.asObservable();
  private errorBodySubject = new BehaviorSubject<ErrorBody | null>(null);
  errorBody$ = this.errorBodySubject.asObservable();

  constructor() { }

  show(data?: ErrorBody) {
    this.isModalVisibleSubject.next(true);
    this.errorBodySubject.next(data || null);
  }

  hide() {
    this.isModalVisibleSubject.next(false);
    this.errorBodySubject.next(null);
  }
}
