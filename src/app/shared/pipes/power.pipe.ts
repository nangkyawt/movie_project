import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power',
})
export class PowerPipe implements PipeTransform {
  transform(mynum: number, exp: number): number {
    return Math.pow(mynum, exp);
  }
}
