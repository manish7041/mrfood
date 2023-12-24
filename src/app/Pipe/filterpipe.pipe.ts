import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../Model/product';

@Pipe({
  name: 'filterpipe',
  pure:true
})
export class FilterpipePipe implements PipeTransform {

  transform(value: any, searchInput:string =''):any {
      return value.filter((search: Product) => {
    
       if(searchInput.length < 3) return null;
        return (
          search.title.toLowerCase().indexOf(searchInput.toLowerCase()) >
         - 1);

      });
      
      
  }

}
