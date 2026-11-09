import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { EditGuardService } from "./edit-guard";

export const editGuard: CanActivateFn = () => {
    const guardService = inject(EditGuardService);
    const router = inject(Router);

    if(guardService.guardEnabled()) {
        return router.parseUrl('/music');
    }
    return true;
};