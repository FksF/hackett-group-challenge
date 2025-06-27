import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { LoginRoutingModule } from './login-routing.module';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ButtonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    DialogModule,
    CheckboxModule
  ]
})

export class LoginModule { }