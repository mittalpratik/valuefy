import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCaseVideoName'
})
export class UpperCasePipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }

}
