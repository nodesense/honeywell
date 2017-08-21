import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // address: any = {
  //   city : 'BLR'
  // };

  address: any = null;

  //access template dom in ts file
  
  @ViewChild("p1") //<p #p1 >
  para1: ElementRef;

  @ViewChild("textInput")
  inputField: ElementRef;

  constructor() {
   }

  ngOnInit() {
         this.para1.nativeElement.textContent = "hi"
         this.inputField.nativeElement.focus();
  }

}
