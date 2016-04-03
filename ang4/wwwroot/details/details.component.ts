import { Component } from 'angular2/core';
import { RouteConfig, RouterOutlet, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Location, LocationStrategy, HashLocationStrategy } from 'angular2/router';

//import { LeftPanelComponent } from "./leftpanel/left-panel.component";
import { DetailsListComponent } from "./details-list.component";
import { DetailsItemComponent } from "./details-item.component";

@Component({
    //selector: "details-page",
    //templateUrl: "./wwwroot/details/details.html",
    template: `<h1>{{title}}</h1>
<section>
    <details-list></details-list>
</section>
<section>
    <router-outlet></router-outlet>
</section>
`,
    directives: [RouterOutlet, DetailsListComponent]
})
@RouteConfig([
    //{ path: '/', name: 'DetailsList', component: DetailsListComponent },
    //{ path: '/:id', name: 'DetailsItem', component: DetailsItemComponent }
])
export class DetailsComponent {
    title: string = "Details Component";
}
