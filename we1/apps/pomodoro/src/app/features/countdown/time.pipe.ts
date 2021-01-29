import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time',
})
export class TimePipe implements PipeTransform {
  transform(value: number): string {
    if (value < 0) {
      return `ERROR`;
    } else {
      const hours = value >= 3600 ? Math.floor(value / 3600) : 0;
      const minutes = Math.floor((value % 3600) / 60);
      const seconds = value % 60;
      return `${this.fixDigit(hours)}:${this.fixDigit(minutes)}:${this.fixDigit(
        seconds
      )}`;
    }
  }

  fixDigit(value: number): string {
    return `${value > 9 ? '' : '0'}${value}`;
  }
}
