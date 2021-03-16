import { NgModule } from '@angular/core';
import { ConcatPipe } from './pipes/concat/concat.pipe';



@NgModule({
  declarations: [ConcatPipe],
  imports: [
  ],
  exports: [ConcatPipe]
})
export class SharedModule { }
