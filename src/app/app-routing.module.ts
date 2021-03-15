import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from 'projects/core/src/lib/authentication';
import { LoginComponent } from 'projects/core/src/lib/authentication/login/login.component';
import { CalendarViewComponent } from './calendar/container/calendar-view/calendar-view.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'temp', component: CalendarViewComponent, canActivate: [AuthenticationGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
