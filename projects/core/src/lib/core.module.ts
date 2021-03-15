import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { AuthenticationModule } from './authentication/authentication.module';



@NgModule({
  declarations: [CoreComponent],
  imports: [
    AuthenticationModule
  ],
  exports: [CoreComponent]
})
export class CoreModule { }
