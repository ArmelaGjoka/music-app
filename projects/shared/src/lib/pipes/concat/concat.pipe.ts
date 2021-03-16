import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concat'
})
export class ConcatPipe<T> implements PipeTransform {

  transform(values: Array<T>, separator = ', '): any {
    return values.join(separator);
  }
}
