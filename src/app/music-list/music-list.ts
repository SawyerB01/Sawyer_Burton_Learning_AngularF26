import { Component, inject } from '@angular/core';
import { MusicListItem } from '../music-list-item/music-list-item';
import { ContentEvent } from '../music-list-item/music-list-item';
import { Music } from '../services/music'; 
import { APP_CONFIG } from '../../models/app-config';
@Component({
  imports: [MusicListItem],
  selector: 'app-music-list',
  styleUrl: './music-list.css',
  templateUrl: './music-list.html',
  
})
export class MusicList{
  readonly musicService = inject(Music);
  private config = inject(APP_CONFIG);
  
readonly apiBaseUrl = this.config.apiBaseUrl;


handleItemClick(event: ContentEvent){{
  this.musicService.removeMusic(event.id);
}}

}



