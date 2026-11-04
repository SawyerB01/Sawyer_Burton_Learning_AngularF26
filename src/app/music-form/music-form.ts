import { Component, input, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Music } from '../services/music';
import { musicGlossary } from '../../models/File_01';

@Component({
  selector: 'app-music-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './music-form.html',
  styleUrl: './music-form.css'
})
export class MusicForm implements OnInit {
  private fb = inject(FormBuilder);
  private musicService = inject(Music);
  private router = inject(Router);

  id = input<string>();

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    category: ['pop', Validators.required],
    year: [2024, [Validators.required, Validators.min(1900)]],
    dateReleased: ['', Validators.required],
    description: [''],
    img: ['']
  });

  ngOnInit() {
    const currentId = this.id();

    if (currentId) {
      // Edit mode – find the item and pre-fill the form
      const item = this.musicService.music().find(m => m.id === +currentId);

      if (item) {
        this.form.patchValue({
          name: item.name,
          category: item.category,
          year: item.year,
          dateReleased: item.dateReleased,
          description: item.description || '',
          img: item.img || ''
        });
      }
    }
  }

onSubmit() {
  if (this.form.invalid) return;

  const value = this.form.getRawValue();
  const currentId = this.id();

if (currentId) {
  // EDIT MODE – temporary working version
  const updatedItem: musicGlossary = {
    id: +currentId,
    name: value.name!,
    category: value.category as any,
    year: value.year!,
    dateReleased: value.dateReleased!,
    description: value.description || undefined,
    img: value.img || ''
  };

  // Remove the old version and add the updated one
  this.musicService.removeMusic(+currentId);
  this.musicService.addMusic(updatedItem);

  this.router.navigate(['/music', currentId]);
  } else {
    // ADD MODE
    const newItem: musicGlossary = {
      id: Date.now(),
      name: value.name!,
      category: value.category as any,
      year: value.year!,
      dateReleased: value.dateReleased!,
      description: value.description || undefined,
      img: value.img || ''
    };

    this.musicService.addMusic(newItem);
    this.form.reset({ category: 'pop', year: 2024 });
    this.router.navigate(['/music']);
  }
}
};