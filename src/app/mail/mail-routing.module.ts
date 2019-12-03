import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailViewComponent } from './components/mail-view/mail-view.component';
import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';
import { MailFolderResolve } from './containers/mail-folder/mail-folder.resolve';
import { MailViewResolve } from './components/mail-view/mail-view.resolve';


const routes: Routes = [
  {
    path: 'folder/:name', component: MailFolderComponent, resolve: {
      messages: MailFolderResolve
    }
  },
  {
    path: 'message/:id', component: MailViewComponent, outlet: 'pane', resolve: {
      message: MailViewResolve
    }
  },
  { path: '**', redirectTo: 'folder/inbox' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailRoutingModule { }
