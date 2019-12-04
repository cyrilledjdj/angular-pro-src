import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthModule } from '../auth/auth.module';
import { MailAppComponent } from './components/mail-app/mail-app.component';
import { MailItemComponent } from './components/mail-item/mail-item.component';
import { MailViewComponent } from './components/mail-view/mail-view.component';
import { MailViewGuard } from './components/mail-view/mail-view.guard';
import { MailViewResolve } from './components/mail-view/mail-view.resolve';
import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';
import { MailFolderResolve } from './containers/mail-folder/mail-folder.resolve';
import { MailRoutingModule } from './mail-routing.module';
import { MailService } from './mail.service';




@NgModule({
  declarations: [MailAppComponent, MailItemComponent, MailFolderComponent, MailViewComponent],
  imports: [
    CommonModule,
    MailRoutingModule,
    AuthModule
  ],
  providers: [MailService, MailFolderResolve, MailViewResolve, MailViewGuard],
  exports: [MailAppComponent]
})
export class MailModule { }
