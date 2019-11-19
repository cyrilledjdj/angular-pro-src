import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthFormComponent } from './auth-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { AuthRememberComponent } from './auth-remember.component';



@NgModule({
  declarations: [AuthFormComponent, AuthRememberComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  exports: [AuthFormComponent, AuthRememberComponent]
})
export class AuthFormModule { }
