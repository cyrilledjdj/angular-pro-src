import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AuthFormComponent } from './auth-form.component';
import { AuthMessageComponent } from './auth-message.component';
import { AuthRememberComponent } from './auth-remember.component';

@NgModule({
  declarations: [AuthFormComponent, AuthRememberComponent, AuthMessageComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  exports: [AuthFormComponent, AuthRememberComponent]
})
export class AuthFormModule { }
