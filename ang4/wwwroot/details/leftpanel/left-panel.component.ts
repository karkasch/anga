﻿import {Component} from 'angular2/core';

//export module LeftPanel {
    @Component({
        selector: "left-panel",
        templateUrl: "./wwwroot/details/leftpanel/left-panel.html"
    })
    export class LeftPanelComponent {
        test: string = "In LeftPanelComponent"
    }
//}