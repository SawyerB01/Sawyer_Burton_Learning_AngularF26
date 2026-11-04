import { Routes } from '@angular/router';
import { MusicList } from './music-list/music-list';
import { MusicDetail } from './music-detail/music-detail';

export const routes: Routes = [
    { path: 'music', component: MusicList },
    { path: 'music/:id', component: MusicDetail },
    { path: '', redirectTo: 'music', pathMatch: 'full'}
];
