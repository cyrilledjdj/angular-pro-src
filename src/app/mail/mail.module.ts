import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MailAppComponent } from './components/mail-app/mail-app.component';
import { MailItemComponent } from './components/mail-item/mail-item.component';
import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';
import { MailRoutingModule } from './mail-routing.module';
import { MailService } from './mail.service';
import { MailFolderResolve } from './containers/mail-folder/mail-folder.resolver';
import { MailViewComponent } from './components/mail-view/mail-view.component';



@NgModule({
  declarations: [MailAppComponent, MailItemComponent, MailFolderComponent, MailViewComponent],
  imports: [
    CommonModule,
    MailRoutingModule
  ],
  providers: [MailService, MailFolderResolve],
  exports: [MailAppComponent]
})
export class MailModule { }
