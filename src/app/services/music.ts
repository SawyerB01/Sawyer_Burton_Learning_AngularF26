import { HttpClient } from '@angular/common/http';
import { musicGlossary } from '../../models/File_01';
import { APP_CONFIG } from '../../models/app-config';
import { Injectable, signal, computed, effect, inject } from '@angular/core';
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class Music {
  private http = inject(HttpClient);
  private config = inject(APP_CONFIG);
  readonly apiBaseUrl = this.config.apiBaseUrl;

    private readonly _music = signal<musicGlossary[]>([]);
    error = signal<string | null>(null);
    isLoading = signal(true);

    readonly music = this._music.asReadonly();

    constructor() {
      this.load();

      effect(() => {
      console.log("Current number of songs", this.music().length);
    });



    console.log("Music Service created", this);
  }
      getById(id: string): musicGlossary | undefined {
      return this._music().find(item => item.id === id);
    }
      load() {
  this.isLoading.set(true);
  this.error.set(null);

  this.http.get<any[]>(`${this.config.apiBaseUrl}/json/stations`, {
    params: {
      limit: 30,
      hidebroken: true
    }
  }).subscribe({
    next: (stations) => {
      const mapped = stations.map(s => this.mapStation(s));
      this._music.set(mapped);
      this.isLoading.set(false);
    },
    error: () => {
      this.error.set('Could not load radio stations.');
      this.isLoading.set(false);
    }
  });
}
    private mapStation(station: any): musicGlossary {
      return{
        id: station.stationuuid,
        name: station.name?.trim() || 'Unkown Station',
        img: station.favicon || 'assets/default-radio.png',
        description: [station.tags, station.country]
        .filter(Boolean)
        .join(' . ')
        .trim() || 'No description',
        category: station.tags?.split(',')[0]?.trim() || 'unknown',
        streamUrl: station.url_resolved || station.url || '',
        tags: station.tags || '',
        country: station.country || ''
      };
    
    }

    addMusic(newItem: musicGlossary) {
        this._music.update(list=> [...list, newItem]);
    }
    testUpdate() {
      console.log('updateMusic works');
    }

    readonly musicWithDescription = computed(() =>
    this._music().filter(item => !!item.description)
);

removeMusic(id: string) {
    this._music.update(list=>list.filter(item => item.id !== id));
}
updateMusic(item: musicGlossary) {
  this._music.update(list =>
    list.map(m => m.id === item.id ? item : m)
  );
}

readonly descriptionCount = computed(() =>
this.musicWithDescription().length
);
readonly hasMusic = computed(() => this._music().length >0);

}