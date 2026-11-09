import { Routes } from '@angular/router';
import { MusicList } from './music-list/music-list';
import { MusicDetail } from './music-detail/music-detail';
import { MusicForm } from './music-form/music-form';
import { editGuard } from './services/edit.guard';

export const routes: Routes = [
    { path: 'music', component: MusicList },
    { path: 'music/add', component: MusicForm},
    {
        path: 'music/edit/:id',
        component: MusicForm,
        canActivate: [editGuard]
    },

    { path: 'music/:id', component: MusicDetail },
    { path: '', redirectTo: 'music', pathMatch: 'full'}

    
];