import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSpaces'
})
export class RemoveSpacesPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    const str = value.split(' ');
    const newString = str.join('');
    return newString;
  }

}
