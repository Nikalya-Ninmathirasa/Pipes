import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transform'
})
export class TransformPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const[rate]=args;
    return value*rate;

  }

}
