import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarViewComponent } from './container/calendar-view/calendar-view.component';

const routes: Routes = [
    {path: '', component: CalendarViewComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CalendarRoutingModule { }