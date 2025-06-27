import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { LoadingComponent } from './components/loading/loading.component';
import { AutoFocusModule } from 'primeng/autofocus';
import { FormsModule } from '@angular/forms';
import { StepsModule } from 'primeng/steps';
import { NumericInputMaskDirective } from './directives/numeric-input-mask.directive';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { ErrorModalComponent } from './components/error-modal/error-modal.component';
import { OnlyNumbersDirective } from './directives/only-numbers.directive';


@NgModule({
  declarations: [
    LoadingComponent,
    NumericInputMaskDirective,
    ErrorModalComponent,
    OnlyNumbersDirective
  ],
  imports: [
    CommonModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    TieredMenuModule,
    AutoFocusModule,
    FormsModule,
    StepsModule,
    DialogModule,
    ToastModule
  ],
  exports: [
    LoadingComponent,
    NumericInputMaskDirective,
    ErrorModalComponent,
    OnlyNumbersDirective
  ]
})
export class SharedModule { }
