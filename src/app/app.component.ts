import { Component, OnInit } 
        from "@angular/core";

@Component({
    selector: 'product-app', //html tag name
    templateUrl : "app.component.html",

    //scopped css
    styleUrls: [
        "app.component.css"
    ]
})
export class AppComponent implements OnInit {
    title:string = "Product Application";

    //View is not loaded
    constructor() {
        console.log("App component created");
    }

    //called after view is loaded
    ngOnInit() {
        console.log("app ngOnInit");
    }


}