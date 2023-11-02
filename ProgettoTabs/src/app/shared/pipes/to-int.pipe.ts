import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toInt'
})
export class ToIntPipe implements PipeTransform {

  transform(value: number, fixValue: number): string {
    //parseInt(value);
    return (value*10).toFixed(fixValue);
  }

}

