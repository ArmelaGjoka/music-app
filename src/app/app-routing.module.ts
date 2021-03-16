import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'projects/authentication/src/lib/components/login/login.component';
import { AuthenticationGuard } from 'projects/authentication/src/lib/guards/authentication.guard';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'calendar', loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarModule), canActivate: [AuthenticationGuard]},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
