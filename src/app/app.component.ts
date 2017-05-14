import {Component} from '@angular/core';

export class MENU {
    title: string;
    active: boolean;
}

@Component({
    selector: 'app-root',
    template: `
<div class="leftSide">
<h1>{{menuTitle}}</h1>
<ul>
<li *ngFor="let item of menu; let current = index" (click)="changePage(current)" [class.currentPage]="current == currentPage" >{{item['title']}}</li>
</ul>
</div>
<items *ngIf="currentPage == 0"></items>
`,
    styleUrls: ['./app.component.css', 'reset.css']
})
export class AppComponent {
    currentPage: number = 0;

    changePage(index: number) {
        this.currentPage = index;
    }

    menuTitle: string = 'Main';
    menu: MENU[] = [
        {
            'title': 'Overview',
            'active': true
        }
        ];
}
