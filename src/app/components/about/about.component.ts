import { Component, OnInit } from '@angular/core';

//*ngIf, else, ng-template
//*ngFor
//(click)
//event bubbling

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  members:string[] = ["Member 1", 
                      "Member 2"];

  show: boolean = true;

  toggle(e: Event) {
    this.show = !this.show;
    console.log(e);
    e.stopPropagation();
  }

  divClick()
  {
    alert("div");
  }

  constructor() { }

  ngOnInit() {
  }

}
