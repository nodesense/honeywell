import { Component, OnInit, 
        Input, Output, 
        EventEmitter, 
        SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input()
  count: number = 0;

  @Input()
  title: string;


  //For two way binding
  //output be inputName + "Change"

  @Output()
  countChange: EventEmitter<number> = new EventEmitter();
  

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("@input changed", changes);
  }

  incr() {
    //publisher
    this.countChange.emit(this.count + 1)

  }

}
