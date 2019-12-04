import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth/auth.guard';
import { MailAppComponent } from './components/mail-app/mail-app.component';
import { MailViewComponent } from './components/mail-view/mail-view.component';
import { MailViewGuard } from './components/mail-view/mail-view.guard';
import { MailViewResolve } from './components/mail-view/mail-view.resolve';
import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';
import { MailFolderResolve } from './containers/mail-folder/mail-folder.resolve';




const routes: Routes = [
  {
    path: 'mail',
    component: MailAppComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'folder/:name', component: MailFolderComponent, resolve: {
          messages: MailFolderResolve
        }
      },
      {
        path: 'message/:id', component: MailViewComponent, outlet: 'pane', resolve: {
          message: MailViewResolve
        },
        canDeactivate: [MailViewGuard]
      }
    ]
  },
  { path: '**', redirectTo: 'mail/folder/inbox' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailRoutingModule { }
