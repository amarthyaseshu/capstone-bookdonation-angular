import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookSearch'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], field: string,val:string): any[] {
    if(!items){
      return [];
    }
    if(!val){
      return items;
    }
    return items.filter(item=>item[field].match(new RegExp(val,'i')));
  }

}
