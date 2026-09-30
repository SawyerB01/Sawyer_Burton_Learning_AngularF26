import { Component, input, output } from '@angular/core';
import { MusicList } from '../music-list/music-list';
import { musicGlossary } from '../../models/File_01';
export interface ContentEvent {
  id: number;
  action: 'opened' | 'favourited';
}

@Component({
  imports: [],
  selector: 'app-music-list-item',
  styleUrl: './music-list-item.css',
  templateUrl: './music-list-item.html',
})


export class MusicListItem {
  item = input.required<musicGlossary>();

 itemClicked = output<ContentEvent>();

 onitemClick() {
  this.itemClicked.emit({
    id: this.item().id,
    action: 'opened'
  });
 }
}
