import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'thousondseparator'
})
export class DecimalPipeMy extends DecimalPipe  {

  transform(val: number): string {
    // Format the output to display any way you want here.
    // For instance:
    
    if (val !== undefined && val !== null) {
      return val.toLocaleString(/*arguments you need*/);
    } else {
      return '';
    }
  }

  // transform(value: any, digits?: string): string {
  //   debugger;
  //   return super.transform(value, digits).replace(',', '.');


  // }
}