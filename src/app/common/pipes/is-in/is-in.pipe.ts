import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appIsIn',
  standalone: true,
  pure: true
})
export class IsInPipe implements PipeTransform {

  transform(array: Array<string | number>, value: string | number): boolean {
    return array.includes(value);
  }

}
