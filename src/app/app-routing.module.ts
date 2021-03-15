import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'projects/authentication/src/lib/components/login/login.component';
import { AuthenticationGuard } from 'projects/authentication/src/lib/guards/authentication.guard';
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
