import { Component } from '@angular/core';
import { ErrorModalService } from '../../services/error-modal-service.service';
import { ErrorBody } from '../../models/error.interface';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.scss']
})

export class ErrorModalComponent {
  showDialog: boolean = false;
  errorBody: ErrorBody | null = null;

  constructor(private errorModalService: ErrorModalService) {
    this.errorModalService.isModalVisible$.subscribe(isVisible => {
      this.showDialog = isVisible;
    });
    this.errorModalService.errorBody$.subscribe(errorBody => {
      this.errorBody = errorBody;
    });
  }

  closeModal = () => {
    this.errorModalService.hide();
    if (this.errorBody?.code === 'PV003') {
      window.location.reload();
    }
  }

}