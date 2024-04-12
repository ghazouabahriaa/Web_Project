import { Injectable } from "@angular/core";

export interface Menu {
    state: string;
    name: string;
    icon: string;
    role: string;
}

const MENUITEMS = [
    { state: 'dashboard', name: 'Dashboard', icon: 'dashboard', role: '' },
    { state: 'category', name: 'Gestion Category Stage', icon: 'category', role: 'admin' },
    { state: 'stage', name: 'Gestion Stage', icon: 'inventory_2', role: 'admin' }

];

@Injectable()
export class MenuItems {
    getMenuitem(): Menu[] {
        return MENUITEMS;
    }
}