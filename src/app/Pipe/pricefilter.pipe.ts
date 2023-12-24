import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pricefilter'
})
export class PricefilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
