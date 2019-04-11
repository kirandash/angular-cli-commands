import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addcommas'
})
export class AddcommasPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
