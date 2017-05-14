import {Component, OnInit} from '@angular/core';
import {itemsService} from './items.service';
import {coment} from './items.class';


@Component({
    selector: 'items',
    template: `
                <div class="fleft">
                    <div class="fleft MenuLvl2">
                        <h2>{{title}}</h2>
                        <div class="clearfix">
                        <input type="text" [(ngModel)]="newItem" placeholder="Type name here...">
                        <button (click)="addItem(newItem)" class="AddItem">Add new</button>
                        </div>
                        <ul [perfect-scrollbar]="config">
                            <li *ngFor="let item of items; let i = index" class="clearfix"  [class.activeItem]="i == curentItem">
                                <span (click)="changeCurrentItem(i)">{{item.name}}</span>
                                <span class="amount" *ngIf="item.comments.length>0" [style.marginLeft]="item.comments.length<10?'30px':'42px'">{{item.comments.length}}</span>
                                <button (click)="removeItem(i)">Delete</button></li>
                        </ul>                    
                    </div>
                        <div class="fleft"><coment-comp [curentItem]="curentItem" [currentItemReady] = 'currentItemReady'></coment-comp></div>
                </div>`,
    styles: [`
@import 'https://cdnjs.cloudflare.com/ajax/libs/jquery.perfect-scrollbar/0.6.15/css/perfect-scrollbar.min.css';

            .fleft {
              float: left;
            }

            .MenuLvl2 {
              margin-left: 32px;
              width: 479px;
              min-height: 523px;
              border: 1px solid #f2f2f2;
              margin-top: 34px;
              border-radius: 3px;
              box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
              -webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;
            }

            h2{    
           font-family: 'Open Sans', sans-serif;
            font-size: 32px;
            display: block;
            margin-bottom: 18px;
            color: #565A69;
            margin-left: 25px;
            margin-top: 10px;
            }       
            input[type='text']{
                width: 290px;
                height: 37px;
                border: 1px solid #cccccc;
                border-radius: 3px;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                padding-left: 9px;
                color: #b3b3b3;
                margin-left: 31px;
                float: left;
                font-size: 14px;

            }
            .AddItem{
            width: 132px;
            height: 37px;
            background: #23ccc0;
            font-weight: 300;
            color: #ffffff;
            font-family: 'Open Sans', sans-serif;
            line-height: 39px;
            text-align: left;
            box-sizing: border-box;
            padding-left: 29px;
            outline: none;
            border: none;
            border-radius: 3px;
            cursor: pointer;
            float: left;
            margin-left: 11px;
            }
            
            ul{
            height: 375px;
            overflow: hidden;
            margin-top: 10px;
            }

            ul li{
                width: calc(100% - 49px);
                display:block;
                -webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;
                margin-left:31px;
                margin-right: 19px;
                min-height: 55px;
                border-bottom:1px solid #f2f2f2;
                padding-top: 11px;  
            }
            ul li button{
            float: right;
            width: 97px;
            height: 34px;
            -webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;
            border-radius: 3px;
            border: 1px solid #FF3159;
            color: #ff305a;
            text-align: center;
            /*line-height: 32px;*/
            font-family: 'Open Sans', sans-serif;
            font-size: 16px;
            font-weight: 300;
            background:none;
            outline: none;
            cursor:pointer;
            }
            
            
            ul li span:first-of-type{
                font-family: 'Open Sans', sans-serif;
                color: #2B2F3E;
                line-height: 32px;
                display: block;
                float: left;
                max-width: 225px;
                word-wrap: break-word;
                cursor: pointer;
                font-size: 14px;
                font-weight:600;
            }
            
            .amount{
             /*width: 39px;*/
             padding:0 9px;
             height: 20px;
             display:block;
             float: left;
             border-radius: 10px;
             text-align: center;
             background: #27ccc0;
             font-family: 'Open Sans', sans-serif;
             font-size: 13px;
             line-height: 20px;
             margin-top: 7px;
             /*margin-left: 9px;*/
             color: #ffffff;
             font-weight:bold;
            
            }
            
            .activeItem{
            position:relative;
            }
            
            .activeItem:after{
            position:absolute;
            content: '';
            display:block;
            width: 5px;
            height: 54px;
            background: #ff2f5a;
            top: 0;
            left:-31px;
            }
`]
})
export class items implements OnInit {

    newItem: string;

    title = 'Items';
    items: coment[] = [];

    curentItem: number = 1;
    currentItemReady: boolean = true;

    changeCurrentItem(item: number) {
        this.curentItem = item;
        this.currentItemReady = true;
        console.dir(item);
    }

    constructor(private itemsService: itemsService) {
    }

    addItem(item: string) {
        if (this.newItem.length == 0 || this.newItem.trim().length == 0) {
            return;
        }
        this.itemsService.addItem(item);
        this.newItem = '';
    }

    removeItem(index: number) {
        this.itemsService.removeItem(index);
    }

    ngOnInit() {
        this.items = this.itemsService.getItems();
        // console.log(this.itemsService.getItems());
    }

}