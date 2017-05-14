import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {items} from './items.component';
import {itemsService} from './items.service';
import {coments} from './coments.component';
import { PerfectScrollbarModule } from 'angular2-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'angular2-perfect-scrollbar';

import { LocalStorageModule } from 'angular-2-local-storage';

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};


import {AppComponent} from './app.component';

@NgModule({
    declarations: [
        AppComponent,
        items,
        coments
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG),
        LocalStorageModule.withConfig({
            prefix: 'my-app',
            storageType: 'localStorage'
        })
    ],
    providers: [itemsService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
