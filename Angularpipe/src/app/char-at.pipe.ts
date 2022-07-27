import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charAt'
})
export class CharAtPipe implements PipeTransform {

  transform(property: string,index:number): string {
    //console.log(property);
    //console.log(index);
    return property.charAt(index)


    
    
  }

}
