import {Component} from 'angular2/core';
import { RouteConfig, RouterOutlet, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Location, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import { DetailsComponent } from "./details.component";

@Component({
    selector: "details-item",
    template: `<p>details item.</p>`
})
//@RouteConfig([
//    { path: '/', name: 'Details', component: DetailsComponent, useAsDefault: true },
//    { path: '/:id', name: 'DetailsItem', component: DetailsItemComponent }
//])
export class DetailsItemComponent {
    title: string = "Details Item";
}
