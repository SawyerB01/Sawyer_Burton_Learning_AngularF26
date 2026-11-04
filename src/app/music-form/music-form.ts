import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Music } from '../services/music';
import { musicGlossary } from '../../models/File_01';

@Component({
  selector: 'app-music-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './music-form.html',
  styleUrl: './music-form.css'
})
export class MusicForm {
  private fb = inject(FormBuilder);
  private musicService = inject(Music);

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    category: ['pop', Validators.required],
    year: [2024, [Validators.required, Validators.min(1900)]],
    dateReleased: ['', Validators.required],
    description: [''],
    img: ['']
  });

  onSubmit() {
    if (this.form.invalid) return;

    const value = this.form.getRawValue();

    const newItem: musicGlossary = {
      id: Date.now(),
      name: value.name!,
      category: value.category as any,
      year: value.year!,
      dateReleased: value.dateReleased!,
      description: value.description || undefined,
      img: value.img || ''
    };

    this.musicService.addMusic(newItem);   // ← change method name if yours is different
    this.form.reset({ category: 'pop', year: 2024 });
  }
}