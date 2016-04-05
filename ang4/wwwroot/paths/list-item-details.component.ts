import { Component } from 'angular2/core';
import { RouteConfig, RouterOutlet, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Location, LocationStrategy, HashLocationStrategy } from 'angular2/router';

@Component({
    selector: "list-item-details",
    //templateUrl: "./wwwroot/details/details.html",
    template: `<h2>{{title}}</h2>
<i>text</i>
`,
    directives: [RouterOutlet]
})
export class ListItemDetailsComponent {
    title: string = "List Item Details Component";
}
