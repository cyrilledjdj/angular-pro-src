import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthFormComponent } from './auth-form.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [AuthFormComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  exports: [AuthFormComponent]
})
export class AuthFormModule { }
