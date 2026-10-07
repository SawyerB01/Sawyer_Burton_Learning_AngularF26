import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MusicList } from './music-list/music-list';
@Component({
  imports: [RouterOutlet, MusicList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}