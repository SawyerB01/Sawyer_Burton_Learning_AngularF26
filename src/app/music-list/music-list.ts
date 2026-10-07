import { Component, inject } from '@angular/core';
import { MusicListItem } from '../music-list-item/music-list-item';
import { ContentEvent } from '../music-list-item/music-list-item';
import { Music } from '../services/music'; 
@Component({
  imports: [MusicListItem],
  selector: 'app-music-list',
  styleUrl: './music-list.css',
  templateUrl: './music-list.html',
  
})
export class MusicList{
  readonly musicService = inject(Music);

handleItemClick(event: ContentEvent){{
  this.musicService.removeMusic(event.id);
}}
}



