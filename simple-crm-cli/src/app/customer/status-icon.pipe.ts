import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusIcon',
})
export class StatusIconPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): string {
    if (value === 'prospect' || value === '') {
      return 'online';
    } else if (value === 'purchased' || value === null) {
      return 'money';
    } else if (value == null) {
      return 'users';
    }

    // TODO: check other statuses and have a fallback icon name
    return '';
  }
}
