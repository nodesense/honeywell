import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";

import {  ReplaySubject } from "rxjs/ReplaySubject";

declare var io;

@Injectable()
export class DataService {

    saveSubject: Subject<any> = new Subject();

    constructor() { 
        this.subscribeServerData();
    }

    historySubject:ReplaySubject<any>  = new ReplaySubject(100);
    

    subscribeServerData() {
        let socket = io("http://localhost:7070");
        socket.on("offer", (product) => {
                console.log("Offer ", product);
                this.historySubject.next(product);
        })
    }

    saveActiveForm() {
        //Publish a message
        this.saveSubject.next("save");
    }

}