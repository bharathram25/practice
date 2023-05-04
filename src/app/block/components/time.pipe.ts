import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: string): string {
    const [hours, minutes, seconds] = value.split(':');
    let formattedTime = '';
    if (Number(hours) > 0) {
      formattedTime += `${Number(hours)}h `;
    }
    if (Number(minutes) > 0) {
      formattedTime += `${Number(minutes)}m`;
    }
    return formattedTime;
  }

}
