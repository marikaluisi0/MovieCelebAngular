import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(array: Array<any>, sortBy: string, order?: string): any[] {
    const sortOrder = order ? order : 'asc'; // setting default ascending order
    if (sortOrder == 'asc') {
      return array.sort((a, b) => a[sortBy] - b[sortBy]);
    }
    return array.sort((a, b) => b[sortBy] - a[sortBy]);
  }
}
