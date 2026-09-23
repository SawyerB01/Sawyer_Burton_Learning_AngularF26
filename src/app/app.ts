import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{ musicGlossary } from './models/Interface'

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

    protected readonly title = signal('Music-Profile');

    music: musicGlossary[] = [
        {
            id: 1,
            name: "Test",
            category: "metal",
            year: 2020,
            dateReleased: "2020-12-24"
        }
    ];

}