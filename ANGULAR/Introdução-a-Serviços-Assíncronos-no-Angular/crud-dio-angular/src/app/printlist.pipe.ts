import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'printlist',
  pure: false,
})
export class PrintlistPipe implements PipeTransform {

  transform(value: String[], ...args: unknown[]): unknown {
    let returnStr = '';
    if (value.length) {
      value.forEach(val => {
        returnStr = returnStr + '' + val;
      })
    }
    return returnStr;
  }

}
