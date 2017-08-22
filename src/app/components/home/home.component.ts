import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  siteLikes:number = 1000;

  _likes:number = 100;



  get likes() {
    return this._likes;
  }

  set likes(value) {
    this._likes = value;
  }

  constructor() { }

  ngOnInit() {

    setInterval( ()=> {
        this.likes = this.likes + 20;

    }, 2000);

  }

}
