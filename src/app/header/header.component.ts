import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from '../auth/auth.service';

@Component ({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    constructor(private dss: DataStorageService,
                private auth: AuthService) {}
    
    onSaveData() {
        this.dss.storeRecipe().subscribe(
            (response: Response) => {
                console.log(response);
            }); 
    }

    onFetchData() {
        this.dss.getRecipe();
    }

    onLogout() {
        this.auth.logOut();
    }
 }

