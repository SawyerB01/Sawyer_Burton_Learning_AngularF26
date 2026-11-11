import { Component, input, inject, OnInit, computed, effect } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Music } from '../services/music';
import { musicGlossary } from '../../models/File_01';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { validate } from '@angular/forms/signals';


export function noWhiteSpaceValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if(value && typeof value === 'string' && value.trim().length ===0) {
    return { whitespace: true};
  }
  return null;
}

export function yearNotInFuture(group: AbstractControl): ValidationErrors | null {
  const year = group.get('year')?.value;
  const currentYear = new Date().getFullYear();

  if (year && year > currentYear) {
    return { futureYear: true };
  }
  return null;
}


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

  id = input<string | undefined>();

  isEditMode = computed(() => !!this.id());

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2), noWhiteSpaceValidator]],
    category: ['pop', Validators.required],
    year: [2024, [Validators.required, Validators.min(1900)]],
    dateReleased: ['', Validators.required],
    description: [''],
    img: ['']
  },
   { validators: yearNotInFuture });

  ngOnInit() {
    const currentId = this.id();

    if (currentId) {
      // Edit mode – find the item and pre-fill the form
      const item = this.musicService.music().find(m=> m.id === currentId)

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
    // EDIT MODE
    const updated: musicGlossary = {
      id: currentId,
      name: value.name!,
      category: value.category as any,
      year: value.year!,
      dateReleased: value.dateReleased!,
      description: value.description || undefined,
      img: value.img || ''
    };

    this.musicService.updateMusic(updated);
    this.router.navigate(['/music', currentId]);
  } else {
    // ADD MODE
    const newItem: musicGlossary = {
      id: String(Date.now()),
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

constructor() {
  effect(() => {
    const currentId = this.id();
    if (!currentId) return;

    const item = this.musicService.music().find(m => m.id === (currentId));
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
  });
}

};