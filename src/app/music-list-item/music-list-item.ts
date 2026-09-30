import { Component, input } from '@angular/core';
import { MusicList } from '../music-list/music-list';
import { musicGlossary } from '../../models/File_01';

@Component({
  imports: [],
  selector: 'app-music-list-item',
  styleUrl: './music-list-item.css',
  templateUrl: './music-list-item.html',
})
export class MusicListItem {
  item = input.required<musicGlossary>();
}
