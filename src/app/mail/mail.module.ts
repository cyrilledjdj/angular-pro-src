import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MailAppComponent } from './components/mail-app/mail-app.component';
import { MailItemComponent } from './components/mail-item/mail-item.component';
import { MailFolderComponent } from './containers/mail-folder.component';
import { MailRoutingModule } from './mail-routing.module';



@NgModule({
  declarations: [MailAppComponent, MailItemComponent, MailFolderComponent],
  imports: [
    CommonModule,
    MailRoutingModule
  ],
  exports: [MailAppComponent]
})
export class MailModule { }
