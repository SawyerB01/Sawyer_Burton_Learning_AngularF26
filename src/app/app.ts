import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { musicGlossary } from '../models/File_01';
import { MusicList } from './music-list/music-list';
@Component({
  imports: [RouterOutlet, MusicList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
    music: musicGlossary[] = [
         {
            id: 1,
            name: "Cigarettes After Sex",
            category: "pop",
            year: 2017,
            dateReleased: "2017-11-23",
            description: "This album focuses on soft tones and simple music to convey it's message. It's a personal favourite of mine, this band makes great music but can be depressing at times.",
            img: "https://en.wikipedia.org/wiki/File:Cigarettes_After_Sex_(album).svg"
          },
        {
          id: 2,
          name: "Monster",
          category: "pop",
          year: 2007,
          dateReleased: "2007-08-24",
          img: "https://en.wikipedia.org/wiki/File:Skillet-Monster.jpg"
        },
        {
          id: 3,
          name: "when September ends",
          category: "rock",
          year: 1995,
          dateReleased: "1995-09-18",
          img: "https://en.wikipedia.org/wiki/File:Green_Day_-_American_Idiot_album_cover.png"
        },
        {
          id: 4,
          name: "Speak for Yourself",
          category: "pop",
          year: 2005,
          dateReleased: "2005-07-18",
          img: "https://en.wikipedia.org/wiki/File:Imogen_Heap_-_Speak_For_Yourself.jpg"
        },
        {
          id: 5,
          name: "In love and Death",
          category: "metal",
          year: 2004,
          dateReleased: "2004-02-18",
          img: "https://en.wikipedia.org/wiki/File:In_Love_and_Death.jpg" 
        },
        {
          id: 6,
          name: "No Need To Argue",
          category: "pop",
          year: 2007,
          dateReleased: "2007-08-24",
          description: "This album uses it's classic sad trope mixed with guitar and that effortless feeling of heaviness from their music. Another personal favourite, but also comes at the same cost.",
        img: "https://en.wikipedia.org/wiki/File:CranberriesNoNeedToArgueAlbumcover.jpg"
        }

    ];
}