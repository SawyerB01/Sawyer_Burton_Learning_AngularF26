import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { musicGlossary } from '../models/File_01';
@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
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