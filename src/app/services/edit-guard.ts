import { Service } from '@angular/core';
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root'})
export class EditGuardService {
    guardEnabled = signal(true);
    toggle() {
        this.guardEnabled.update(v => !v);
    }
}
