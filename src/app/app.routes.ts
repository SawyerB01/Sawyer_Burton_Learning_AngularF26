import { Routes, ActivatedRouteSnapshot } from "@angular/router";
import { inject } from "@angular/core";

import { MusicList } from "./music-list/music-list";
import { MusicDetail } from "./music-detail/music-detail";
import { MusicForm } from "./music-form/music-form";
import { editGuard } from "./services/edit.guard";
import { Music } from "./services/music";


export const routes: Routes = [
    { path: 'music', component: MusicList },


    { 
        path: 'music/add',
         loadComponent:() => import('./music-form/music-form').then(m => m.MusicForm),
        canActivate: [editGuard]
    },


    {
        path: 'music/edit/:id',
        loadComponent: () => import('./music-form/music-form').then(m => m.MusicForm),
        canActivate: [editGuard]
    },
    {
path: 'music/:id',
        loadComponent: () => import('./music-detail/music-detail').then(m => m.MusicDetail)
    },
    { path: '', redirectTo: 'music', pathMatch: 'full'},
];
