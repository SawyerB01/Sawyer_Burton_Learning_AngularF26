import { Injectable, signal } from '@angular/core';
import { musicGlossary } from '../../models/File_01';

@Injectable()
export class MockMusic {
  private readonly _music = signal<musicGlossary[]>([
    {
      id: "",
      name: 'MOCK SONG - This is fake data',
      category: 'metal',
      year: 2099,
      dateReleased: '2099-01-01',
      description: 'This is not a real album, just a mock cover showing which is which.',
      img: ''
    }
  ]);

  readonly music = this._music.asReadonly();

  addMusic(item: musicGlossary) {
    this._music.update(list => [... list, item]);
  }

  removeMusic(id: string) {
    this._music.update(list => list.filter(m => m.id !== id));
  }
  updateMusic(item: musicGlossary) {
  this._music.update(list =>
    list.map(m => m.id === item.id ? item : m)
  );
}
}