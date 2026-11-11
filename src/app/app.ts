import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MusicList } from './music-list/music-list';
import { EditGuardService } from './services/edit-guard';
import { editGuard } from './services/edit.guard';
import { LoadingService } from './services/loading';
import { ErrorService } from './services/error';

@Component({
  imports: [RouterOutlet, MusicList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  guardService = inject(EditGuardService);
  loadingService = inject(LoadingService);
  errorService = inject(ErrorService);
}