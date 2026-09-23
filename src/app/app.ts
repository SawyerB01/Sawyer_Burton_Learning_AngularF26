import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { musicGlossary } from '../models/File_01';
@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './styles.css',
  templateUrl: './app.html',
})
export class App {
    music: musicGlossary[] = [
        {
            id: 1,
            name: "Cigarettes After Sex",
            category: "jazz",
            year: 2017,
            dateReleased: "2017-11-23",
            description: "This album focuses on soft tones and simple music to convey it's message. It's a personal favourite of mine, this band makes great music but can be depressing at times."
        },
        {
          id: 2,
          name: "Monster",
          category: "pop",
          year: 2007,
          dateReleased: "2007-08-24"
        },
        {
          id: 3,
          name: "when September ends",
          category: "rock",
          year: 1995,
          dateReleased: "1995-09-18"
        },
        {
          id: 4,
          name: "Headlock",
          category: "pop",
          year: 2005,
          dateReleased: "2005-06-21"
        },
        {
          id: 5,
          name: "In love and Death",
          category: "metal",
          year: 2004,
          dateReleased: "2004-02-18"
        },
        {
          id: 6,
          name: "No Need To Argue",
          category: "pop",
          year: 2007,
          dateReleased: "2007-08-24",
          description: "This album uses it's classic sad trope mixed with guitar and that effortless feeling of heaviness from their music. Another personal favourite, but also comes at the same cost."
        }
    ];
}