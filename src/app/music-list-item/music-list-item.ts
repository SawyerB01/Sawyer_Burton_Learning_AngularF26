import { Component, input, output, inject} from '@angular/core';
import { musicGlossary } from '../../models/File_01';
import { RouterLink } from '@angular/router';
import {Music} from '../services/music';

export interface ContentEvent {
  id: string;
  action: 'opened' | 'favourited';
}

@Component({
  imports: [RouterLink],
  selector: 'app-music-list-item',
  styleUrl: './music-list-item.css',
  templateUrl: './music-list-item.html',
})

export class MusicListItem {
  item = input.required<musicGlossary>();

 itemClicked = output<ContentEvent>();

 private musicService = inject(Music);

onItemClick() {
  this.itemClicked.emit({
    id: this.item().id,
    action: 'opened'
  });
}

onDelete() {
  console.log('Deleting item with id:', this.item().id);
  this.musicService.removeMusic(this.item().id);
}
}
