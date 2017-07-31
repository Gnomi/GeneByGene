import { Component,Input, Injectable, ApplicationRef, ChangeDetectorRef, OnInit } from '@angular/core';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilteredList } from './filteredlist.component';
import { Observable } from 'rxjs';
import { Sample } from '../../models/sample';
import { SampleService } from '../../service/sample.service';

import { Output, ViewChild, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs/Subscription';




@Pipe({
    name: 'filter'
})
//export class FilterPipe implements PipeTransform {
//    transform(items: any, filter: any, isAnd: boolean): any {
//        if (filter && Array.isArray(items)) {
//            let filterKeys = Object.keys(filter);
//            if (isAnd) {
//                return items.filter(item =>
//                    filterKeys.reduce((memo, keyName) =>
//                        (memo && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] === "", true));
//            } else {
//                return items.filter(item => {
//                    return filterKeys.some((keyName) => {
//                        console.log(keyName);
//                        return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] === "";
//                    });
//                });
//            }
//        } else {
//            return items;
//        }
//    }
//}
export class FilterPipe implements PipeTransform {
    transform(items: any, filter: any): any {
        if (filter && Array.isArray(items)) {
            let filterKeys = Object.keys(filter);
            return items.filter(item =>
                filterKeys.reduce((memo, keyName) =>
                    (memo && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] === "", true));
        } else {
            return items;
        }
    }
}




@Component({
    selector: 'filteredApp',
    templateUrl: './filteredApp.component.html',
    providers: [SampleService]
})

export class filteredAppComponent implements OnInit {
    public samples: Sample[];
    public jonitems: Observable<Array<any>>;
    private _items: Array<any>;
    //private _lipsum: any;
    public enableFilter: boolean;
    public filterText: string;
    public filterPlaceholder: string;
    public filterInput = new FormControl();
    private _subscription: Subscription;
    //@Input() items: Observable<any[]>;



  
    constructor(private changeRef: ChangeDetectorRef, private appRef: ApplicationRef, private sampleService: SampleService) {
        //var LoremIpsum: any;
        //this._lipsum = new LoremIpsum();
        
        this._items = [];
        this.jonitems = Observable.of(this._items);
       //this.jonitems = Observable.of(this.samples);
    }


    public getSamples(): void {
        this.sampleService.getSamples().then(a => this._items = a);
    }



    createItems() {
      this._items.length = 0;
      var numItems: number = Math.random() * (200 - 10) + 10;
      console.log("Adding " + numItems.toString() + " items");
      var i: number;
      for (i =0; i < numItems; i++) {
          var label: string = "Jon" + i;//this._lipsum.singleWord();
        var description: string = "Jon" + "AD" + i;//this._lipsum.singleWord();
        this._items.push({ label: label, value: i.toString(), description: description });
      }
    }
    
    ngOnInit() {
        this.getSamples();
      //  this.createItems();



        this._subscription = this.jonitems.subscribe(res => this._items = res);
        this.enableFilter = true;
        this.filterText = "";
        this.filterPlaceholder = "Filter..";

        this.filterInput
            .valueChanges
            .debounceTime(500)
            .subscribe(term => {
                this.filterText = term;
                console.log(term);
            });




    }
}
