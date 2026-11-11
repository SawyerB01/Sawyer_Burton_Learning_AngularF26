import { Routes, ActivatedRouteSnapshot } from "@angular/router";
import { inject } from "@angular/core";

import { MusicList } from "./music-list/music-list";
import { MusicDetail } from "./music-detail/music-detail";
import { MusicForm } from "./music-form/music-form";
import { editGuard } from "./services/edit.guard";
import { Music } from "./services/music";


export const routes: Routes = [
    { path: 'music', component: MusicList },
    { path: 'music/add', component: MusicForm },
    {
        path: 'music/edit/:id',
        component: MusicForm,
        canActivate: [editGuard]
    },
    {
        path: 'music/:id',
        component: MusicDetail,
        resolve: {
            music: (route: ActivatedRouteSnapshot) => {
                const service = inject(Music);
                const id = route.paramMap.get('id');
                return service.music().find(item => item.id === id);
            }
        }
    },
    { path: '', redirectTo: 'music', pathMatch: 'full'},
];
