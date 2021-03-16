import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concat'
})
export class ConcatPipe<T> implements PipeTransform {

  transform(values: Array<T>, separator = ','): any {
    if (!values || values.length == 0) {
        return '';
    }

    if (values.length == 1) {
        return values[0];
    }
    
    return values.join(separator + ' ');
  }
}
