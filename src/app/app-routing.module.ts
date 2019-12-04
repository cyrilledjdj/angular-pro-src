import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthGuard } from './auth/auth.guard';


export class CustomPreload implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return route['data'] && route['data'].preload ? fn() : of(null);
  }
}


const routes: Routes = [
  {
    path: 'dashboard',
    data: { preload: true },
    canLoad: [AuthGuard],
    loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule)
  },
  { path: '', loadChildren: () => import('./mail/mail.module').then(mod => mod.MailModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreload })],
  providers: [CustomPreload],
  exports: [RouterModule]
})
export class AppRoutingModule { }
