import { Component, inject, input, computed } from '@angular/core';
import { Music } from '../services/music'
import { effect } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { musicGlossary } from '../../models/File_01';

@Component({
  selector: 'app-music-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './music-detail.html',
  styleUrl: './music-detail.css'
})
export class MusicDetail {
music = input<musicGlossary | undefined>();
}
