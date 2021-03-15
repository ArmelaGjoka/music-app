import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from 'projects/core/src/lib/authentication';
import { LoginComponent } from 'projects/core/src/lib/authentication/login/login.component';
import { TempCompComponent } from './temp-comp/temp-comp.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'temp', component: TempCompComponent, canActivate: [AuthenticationGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
