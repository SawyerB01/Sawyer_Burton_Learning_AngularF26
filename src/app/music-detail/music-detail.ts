import { Component, inject, input, computed } from '@angular/core';
import { Music } from '../services/music'
import { effect } from '@angular/core';

@Component({
  selector: 'app-music-detail',
  standalone: true,
  imports: [],
  templateUrl: './music-detail.html',
  styleUrl: './music-detail.css'
})
export class MusicDetail {
  id = input<string>();

  private musicService = inject(Music);

  item = computed(() => {
    const idValue = this.id();
    if (!idValue) return undefined;

    const idNum = Number(this.id());
    return this.musicService.music().find(m => m.id === idNum);
  })

  constructor() {
  effect(() => {
    console.log('id signal value:', this.id());
  });
}
}
