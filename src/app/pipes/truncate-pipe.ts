import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true

})

export class TruncatePipe implements PipeTransform {
  transform(value: string | null | undefined, limit: number = 50): string {
    if (!value) return '';

    const text = value.toString();
    if (text.length <= limit) {
      return text;
    }

    return text.slice(0, limit) + '...';
  }
}
