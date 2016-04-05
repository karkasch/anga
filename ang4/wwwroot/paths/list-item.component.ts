import { Component, OnInit } from 'angular2/core';
import { RouteConfig, RouteParams, RouterOutlet, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Location, LocationStrategy, HashLocationStrategy } from 'angular2/router';

import { ListItemDetailsComponent } from "./list-item-details.component";

@Component({
    selector: "list-item",
    //templateUrl: "./wwwroot/details/details.html",
    template: `<h1>{{title}}</h1>
List he2
<div>
    <list-item-details></list-item-details>
</div>
`,
    directives: [RouterOutlet, ListItemDetailsComponent]
})
export class ListItemComponent implements OnInit {
    title: string = "List Item Component";

    constructor(private _routeParams: RouteParams) {
        console.log("ctor ListItemComponent", _routeParams.get("id"));

    }

    ngOnInit() {
        //let id = this._routeParams.get('id');
        //this._service.getHero(id).then(hero => this.hero = hero);
        console.log("ngOnInit ListItemComponent", this._routeParams.get("id"));

    }
}
