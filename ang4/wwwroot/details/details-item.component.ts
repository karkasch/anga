import {Component} from 'angular2/core';
import { RouteConfig, RouterOutlet, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Location, LocationStrategy, HashLocationStrategy } from 'angular2/router';

@Component({
    selector: "details-item",
    template: `<p>details item.</p>`
})
@RouteConfig([
    //{ path: '/details', name: 'DetailsItem', component: DetailsItemComponent, useAsDefault: true },
    { path: '/details/:id', name: 'DetailsItem', component: DetailsItemComponent }
])
export class DetailsItemComponent {
    title: string = "Details Item";
}
