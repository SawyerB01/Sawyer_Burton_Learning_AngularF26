import { Component, inject, input, computed } from '@angular/core';
import { Music } from '../services/music'
import { effect } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { musicGlossary } from '../../models/File_01';
import { OnInit, OnDestroy,  } from '@angular/core';

@Component({
  selector: 'app-music-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './music-detail.html',
  styleUrl: './music-detail.css'
})
export class MusicDetail implements OnInit, OnDestroy {

private musicService = inject(Music);
private openedAt = 0;

  id = input.required<string>();
  item: musicGlossary | undefined;

  ngOnInit(): void {
  this.openedAt = Date.now();{

    const currentId = this.id();
    this.item = this.musicService.getById(currentId);

    console.log(`[lifecycle] opened: ${this.item?.name ?? 'Unknown'}`);
  }
  }

  ngOnDestroy(): void {
    const duration = Math.round((Date.now() - this.openedAt) / 1000);
    console.log(`[lifecycle] closed: ${this.item?.name ?? 'Unknown'} after ${duration} seconds`);
  }


}