import { Component } from 'angular2/core';
import { RouteConfig, RouterOutlet, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Location, LocationStrategy, HashLocationStrategy } from 'angular2/router';

//import { LeftPanelComponent } from "./leftpanel/left-panel.component";

@Component({
    selector: "list",
    //templateUrl: "./wwwroot/details/details.html",
    template: `<h1>{{title}}</h1>
<ul>
        <li><a href="#/paths/12">Linst 1</a></li>
        <li><a href="#/paths/13">Linst 2</a></li>
    </ul>
`,
    directives: [RouterOutlet]
})
export class ListComponent {
    title: string = "List Component";

    constructor() {
        console.log("ctor ListComponent");

        this.title = "List Component 2"
    }
}
