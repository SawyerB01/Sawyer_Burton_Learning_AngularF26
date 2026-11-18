import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genreType',
  standalone: true
})
export class GenreTypePipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (!value) return '';
    const map: Record<string, string> = {
      pop: 'Pop',
      rock: 'Rock',
      jazz: 'Jazz',
      metal: 'Metal',
      classical: 'Classical',
      hiphop: 'Hip Hop',
      electronic: 'Electronic',
      country: 'Country',
      reggae: 'Reggae',
      blues: 'Blues',
      folk: 'Folk',
      punk: 'Punk',
      rnb: 'R&B',
      soul: 'Soul',
      disco: 'Disco',
      funk: 'Funk',
      gospel: 'Gospel',
      latin: 'Latin',
      world: 'World Music'
    };
    return map[value.toLowerCase()] ?? value;
  }
}
