import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailViewComponent } from './components/mail-view/mail-view.component';
import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';
import { MailFolderResolve } from './containers/mail-folder/mail-folder.resolve';
import { MailViewResolve } from './components/mail-view/mail-view.resolve';
import { MailAppComponent } from './components/mail-app/mail-app.component';
import { AuthGuard } from '../auth/auth.guard';


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
        }
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
