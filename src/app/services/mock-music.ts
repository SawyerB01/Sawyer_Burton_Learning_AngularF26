import { Injectable, signal } from '@angular/core';
import { musicGlossary } from '../../models/File_01';

@Injectable()
export class MockMusic {
  private readonly _music = signal<musicGlossary[]>([
    {
      id: 999,
      name: 'MOCK SONG - This is fake data',
      category: 'metal',
      year: 2099,
      dateReleased: '2099-01-01',
      description: 'This is not a real album, just a mock cover showing which is which.',
      img: ''
    }
  ]);

  readonly music = this._music.asReadonly();

  // You can leave the methods empty or just log something
  addMusic(item: musicGlossary) {
    console.log('Mock addMusic called', item);
  }

  removeMusic(id: number) {
    console.log('Mock removeMusic called', id);
  }
}