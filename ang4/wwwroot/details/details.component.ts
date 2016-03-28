import { Component } from 'angular2/core';
//import { LeftPanelComponent } from "./leftpanel/left-panel.component";

//export module Details {
    @Component({
        selector: "details-page",
        templateUrl: "./wwwroot/details/details.html",
        //directives: [LeftPanelComponent]
    })
    export class DetailsComponent {
        test: string = "From DetailsComponent";
    }
//}