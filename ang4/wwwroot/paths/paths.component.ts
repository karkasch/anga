import { Component } from 'angular2/core';
import { RouteConfig, RouteParams, RouterOutlet, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Location, LocationStrategy, HashLocationStrategy } from 'angular2/router';

import { ListComponent } from "./list.component";
import { ListItemComponent } from "./list-item.component";

@Component({
    //selector: "details-page",
    //templateUrl: "./wwwroot/details/details.html",
    template: `<h1>{{title}}</h1>
<section>
    <list></list>
</section>
<section>
    <list-item></list-item>
</section>
`,
    directives: [RouterOutlet, ListComponent, ListItemComponent ]
})
@RouteConfig([
    { path: '/', name: 'List', component: ListComponent },
    { path: '/:id', name: 'ListItem', component: ListItemComponent }
])
export class PathsComponent {
    title: string = "Paths Component";

    constructor(private _routeParams: RouteParams) {
        console.log("ctor PathsComponent", _routeParams);

    }
}
