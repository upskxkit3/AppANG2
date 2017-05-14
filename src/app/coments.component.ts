import {Component, OnInit, Input} from '@angular/core';
import {itemsService} from './items.service';
import {coment} from './items.class';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
    selector: 'coment-comp',
    template: `<div *ngIf="currentItemReady" class="comentBox">
                <h2>{{title}} #{{curentItem+1}}</h2>
                <ul [perfect-scrollbar]="config">
                    <li class="clearfix" *ngFor="let items of items[curentItem].comments; let odd=odd; let even=even;"><div [ngClass]="{ blue: odd, orange: even, fleft:true }"></div><p class="fleft">{{items}}</p></li>
                </ul>
                <div class="addWrapper"><div class="grey"></div><textarea [(ngModel)]="newComent" (keypress)="addNewComment($event,newComent,curentItem)" ></textarea></div>
</div>`,
    styles: [`
        @import 'https://cdnjs.cloudflare.com/ajax/libs/jquery.perfect-scrollbar/0.6.15/css/perfect-scrollbar.min.css';
                .comentBox {
                    margin-left: 20px;
                    width: 444px;
                    min-height: 621px;
                    border: 1px solid #f2f2f2;
                    margin-top: 34px;
                    border-radius: 3px;
                    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
                    -webkit-box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    box-sizing: border-box;
                    padding-left: 17px;
                    padding-right: 4px;
                    position: relative;
                }    
                
                .addWrapper{
                position: absolute;
                left: 18px;
                bottom: 14px;
                }
                
              ul{
              max-height: 420px;
              padding-right: 10px;
              }
                  
              h2{
                    margin-top: 10px;
                    font-size: 32px;
                    color: #565A69;
                    font-family: 'Open Sans', sans-serif;
                    margin-bottom: 40px;
              }
              
              .fleft{
              float:left;
              }
              
              li{
              padding-top: 17px;
              /*border-top: 1px solid #f2f2f2;*/
              margin-top: 17px;
              position:relative;
              }
              
              li:before{
              position:absolute;
              content: '';
              top:0;
              left:0;
              width:401px;
              height: 1px;
              display:block;
              background: #f2f2f2;
              }
              li:first-child{
              border-top: none;
              margin-top: 0;
              padding-top: 0;
              }
              
              li:first-child:before{
              display:none;
              }
                
              p{
              margin-left: 14px;
              width:340px;
              font-family: 'Open Sans', sans-serif;
              font-size : 11px;
              line-height : 18px;
              color : #666666;
              position: relative;
              top: -3px;
              }
              .orange, .blue, .grey{
                width: 52px;
                height: 52px;
                display:inline-block;
              }
              .grey{
              background: #e6e6e6;
              float: left;
              margin-right: 14px;
              }
              
              .orange{
              background: #ff8a00;;
              }
              
              .blue{
              background: #47568c;
              }
              
              textarea{
              width: 335px;
              height: 70px;
              -webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;
              border: 1px solid #CCCCCC;
              resize: none;
              font-size : 12px;
              line-height : 18px;
              color : #666666;
              padding:10px;
              }

`]
})


export class coments implements OnInit {

    items: coment[];

    newComent: string;

    addNewComment(e, comment: string, index: number) {
        if (e.code == 'Enter' && e.key == 'Enter' && e.shiftKey == false && e.ctrlKey == false) {
            this.itemsService.addComent(comment, index);
            this.newComent = '';
            return false;
        }
    }

    @Input() curentItem: number;
    @Input() currentItemReady: boolean;

    constructor(private itemsService: itemsService,private localStorageService: LocalStorageService) {
    }

    title: string = 'Comments';

    ngOnInit() {
        localStorage.setItem('itemComments', JSON.stringify(this.itemsService.getItems()));
        localStorage.removeItem('itemsComments');
        this.items = this.itemsService.getItems();
    }

}