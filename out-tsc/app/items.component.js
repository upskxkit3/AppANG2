var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { itemsService } from './items.service';
export var items = (function () {
    function items(itemsService) {
        this.itemsService = itemsService;
        this.title = 'Items';
        this.items = [];
        this.curentItem = 1;
        this.currentItemReady = true;
    }
    items.prototype.changeCurrentItem = function (item) {
        this.curentItem = item;
        this.currentItemReady = true;
        console.dir(item);
    };
    items.prototype.addItem = function (item) {
        if (this.newItem.length == 0 || this.newItem.trim().length == 0) {
            return;
        }
        this.itemsService.addItem(item);
        this.newItem = '';
    };
    items.prototype.removeItem = function (index) {
        this.itemsService.removeItem(index);
    };
    items.prototype.ngOnInit = function () {
        this.items = this.itemsService.getItems();
        // console.log(this.itemsService.getItems());
    };
    items = __decorate([
        Component({
            selector: 'items',
            template: "\n                <div class=\"fleft\">\n                    <div class=\"fleft MenuLvl2\">\n                        <h2>{{title}}</h2>\n                        <div class=\"clearfix\">\n                        <input type=\"text\" [(ngModel)]=\"newItem\" placeholder=\"Type name here...\">\n                        <button (click)=\"addItem(newItem)\" class=\"AddItem\">Add new</button>\n                        </div>\n                        <ul [perfect-scrollbar]>\n                            <li *ngFor=\"let item of items; let i = index\" class=\"clearfix\"  [class.activeItem]=\"i == curentItem\">\n                                <span (click)=\"changeCurrentItem(i)\">{{item.name}}</span>\n                                <span class=\"amount\" *ngIf=\"item.comments.length>0\" [style.marginLeft]=\"item.comments.length<10?'30px':'42px'\">{{item.comments.length}}</span>\n                                <button (click)=\"removeItem(i)\">Delete</button></li>\n                        </ul>                    \n                    </div>\n                        <div class=\"fleft\"><coment-comp [curentItem]=\"curentItem\" [currentItemReady] = 'currentItemReady'></coment-comp></div>\n                </div>",
            styles: ["\n        @import 'https://cdnjs.cloudflare.com/ajax/libs/jquery.perfect-scrollbar/0.6.15/css/perfect-scrollbar.min.css';\n\n            .fleft {\n              float: left;\n            }\n\n            .MenuLvl2 {\n              margin-left: 32px;\n              width: 479px;\n              min-height: 523px;\n              border: 1px solid #f2f2f2;\n              margin-top: 34px;\n              border-radius: 3px;\n              box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);\n              -webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;\n            }\n\n            h2{    \n           font-family: 'Open Sans', sans-serif;\n            font-size: 32px;\n            display: block;\n            margin-bottom: 18px;\n            color: #565A69;\n            margin-left: 25px;\n            margin-top: 10px;\n            }       \n            input[type='text']{\n                width: 290px;\n                height: 37px;\n                border: 1px solid #cccccc;\n                border-radius: 3px;\n                -webkit-box-sizing: border-box;\n                -moz-box-sizing: border-box;\n                box-sizing: border-box;\n                padding-left: 9px;\n                color: #b3b3b3;\n                margin-left: 31px;\n                float: left;\n                font-size: 14px;\n\n            }\n            .AddItem{\n            width: 132px;\n            height: 37px;\n            background: #23ccc0;\n            font-weight: 300;\n            color: #ffffff;\n            font-family: 'Open Sans', sans-serif;\n            line-height: 39px;\n            text-align: left;\n            box-sizing: border-box;\n            padding-left: 29px;\n            outline: none;\n            border: none;\n            border-radius: 3px;\n            cursor: pointer;\n            float: left;\n            margin-left: 11px;\n            }\n            \n            ul{\n            height: 375px;\n            overflow: hidden;\n            margin-top: 10px;\n            }\n\n            ul li{\n                width: calc(100% - 49px);\n                display:block;\n                -webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;\n                margin-left:31px;\n                margin-right: 19px;\n                min-height: 55px;\n                border-bottom:1px solid #f2f2f2;\n                padding-top: 11px;  \n            }\n            ul li button{\n            float: right;\n            width: 97px;\n            height: 34px;\n            -webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;\n            border-radius: 3px;\n            border: 1px solid #FF3159;\n            color: #ff305a;\n            text-align: center;\n            /*line-height: 32px;*/\n            font-family: 'Open Sans', sans-serif;\n            font-size: 16px;\n            font-weight: 300;\n            background:none;\n            outline: none;\n            cursor:pointer;\n            }\n            \n            \n            ul li span:first-of-type{\n                font-family: 'Open Sans', sans-serif;\n                color: #2B2F3E;\n                line-height: 32px;\n                display: block;\n                float: left;\n                max-width: 225px;\n                word-wrap: break-word;\n                cursor: pointer;\n                font-size: 14px;\n                font-weight:600;\n            }\n            \n            .amount{\n             /*width: 39px;*/\n             padding:0 9px;\n             height: 20px;\n             display:block;\n             float: left;\n             border-radius: 10px;\n             text-align: center;\n             background: #27ccc0;\n             font-family: 'Open Sans', sans-serif;\n             font-size: 13px;\n             line-height: 20px;\n             margin-top: 7px;\n             /*margin-left: 9px;*/\n             color: #ffffff;\n             font-weight:bold;\n            \n            }\n            \n            .activeItem{\n            position:relative;\n            }\n            \n            .activeItem:after{\n            position:absolute;\n            content: '';\n            display:block;\n            width: 5px;\n            height: 54px;\n            background: #ff2f5a;\n            top: 0;\n            left:-31px;\n            }\n"]
        }), 
        __metadata('design:paramtypes', [itemsService])
    ], items);
    return items;
}());
//# sourceMappingURL=C:/Users/n1k1t/Desktop/AppANG2/src/app/items.component.js.map