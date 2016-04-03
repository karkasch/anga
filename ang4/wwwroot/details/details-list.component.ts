import { Component } from 'angular2/core';
import { RouteConfig, RouterOutlet, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Location, LocationStrategy, HashLocationStrategy } from 'angular2/router';

import { LeftPanelComponent } from "./leftpanel/left-panel.component";

@Component({
    selector: "details-list",
    template: `
<h3>{{title}} 1</h3>
<ul>
    <li><a href="#/details/1">Item 1</a></li>
</ul>
`,
    directives: [ LeftPanelComponent ]
})
@RouteConfig([
    { path: '/', name: 'DetailsList', component: DetailsListComponent },
    //{ path: '/:id', name: 'DetailsItem', component: DetailsItemComponent }
])
export class DetailsListComponent {
    title: string = "Details List 2";
}
