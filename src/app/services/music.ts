import { Service, signal, computed, effect, inject } from '@angular/core';
import { musicGlossary } from '../../models/File_01';
import { APP_CONFIG } from '../../models/app-config';

@Service()
export class Music {
    private readonly _music = signal<musicGlossary[]>([
        {
            id: 1,
            name: "Cigarettes After Sex",
            category: "pop",
            year: 2017,
            dateReleased: "2017-11-23",
            description: "This album focuses on soft tones and simple music to convey it's message. It's a personal favourite of mine, this band makes great music but can be depressing at times.",
            img: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Cigarettes_After_Sex_%28album%29.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"
          },
        {
          id: 2,
          name: "Monster",
          category: "pop",
          year: 2007,
          dateReleased: "2007-08-24",
          img: "https://upload.wikimedia.org/wikipedia/en/c/c1/Skillet-Monster.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original"
        },
        {
          id: 3,
          name: "when September ends",
          category: "rock",
          year: 1995,
          dateReleased: "1995-09-18",
            img: "https://upload.wikimedia.org/wikipedia/en/e/ed/Green_Day_-_American_Idiot_album_cover.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original"
        },
        {
          id: 4,
          name: "Speak for Yourself",
          category: "pop",
          year: 2005,
          dateReleased: "2005-07-18",
          img: "https://upload.wikimedia.org/wikipedia/en/d/d9/Imogen_Heap_-_Speak_For_Yourself.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original"
        },
        {
          id: 5,
          name: "In love and Death",
          category: "metal",
          year: 2004,
          dateReleased: "2004-02-18",
          img: "https://upload.wikimedia.org/wikipedia/en/9/98/In_Love_and_Death.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original" 
        },
        {
          id: 6,
          name: "No Need To Argue",
          category: "pop",
          year: 2007,
          dateReleased: "2007-08-24",
          description: "This album uses it's classic sad trope mixed with guitar and that effortless feeling of heaviness from their music. Another personal favourite, but also comes at the same cost.",
        img: "https://upload.wikimedia.org/wikipedia/en/2/2c/CranberriesNoNeedToArgueAlbumcover.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original"
        }
    ]);

    readonly music = this._music.asReadonly();

    addMusic(newItem: musicGlossary) {
        this._music.update(list=> [...list, newItem]);
    }

    readonly musicWithDescription = computed(() =>
    this._music().filter(item => !!item.description)
);

constructor() {
    effect(() => {
        console.log('Current number of songs:', this._music().length);
    });
}

removeMusic(id: number) {
    this._music.update(list=>list.filter(item => item.id !== id));
}

readonly descriptionCount = computed(() =>
this.musicWithDescription().length
);
readonly hasMusic = computed(() => this._music().length >0);

private config = inject(APP_CONFIG);
readonly apiBaseUrl = this.config.apiBaseUrl;
}