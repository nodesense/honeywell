import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";

@Injectable()
export class DataService {

    saveSubject: Subject<any> = new Subject();

    constructor() { 

    }

    saveActiveForm() {
        //Publish a message
        this.saveSubject.next("save");
    }

}