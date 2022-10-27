import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusIcon',
})
export class StatusIconPipe implements PipeTransform {
  transform(value: string | null | undefined, ...args: unknown[]): string {
    if (value === 'prospect') {
      return 'online';
    }

    // TODO: check other statuses and have a fallback icon name
    return 'users';
  }
}
