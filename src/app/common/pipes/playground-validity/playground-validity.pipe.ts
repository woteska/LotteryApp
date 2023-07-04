import { Pipe, PipeTransform } from '@angular/core';
import { PlaygroundValidity } from '../../definitions/playground-validity';

@Pipe({
  name: 'playgroundValidity',
  standalone: true,
  pure: true
})
export class PlaygroundValidityPipe implements PipeTransform {

  transform(playgroundValidity: PlaygroundValidity): string {
    if (playgroundValidity.isValid) {
      return playgroundValidity.orderedSelectedValues.join(', ');
    }
    if (playgroundValidity.isEmpty) {
      return 'empty';
    }
    if (playgroundValidity.hasMissing) {
      return `Error: ${playgroundValidity.missingCount} marks are missing`;
    }
    if (playgroundValidity.overflowCount) {
      return `Error: Please remove ${playgroundValidity.overflowCount} mark`;
    }
    return '';
  }

}
