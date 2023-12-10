import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentagepipe'
})
export class PercentagepipePipe implements PipeTransform {

  transform(value:number, decimal:number=0): unknown {
    return value.toFixed(decimal) +'%';
  }

}
