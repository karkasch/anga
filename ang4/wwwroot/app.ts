/// <reference path="../node_modules/angular2/platform/browser.d.ts" />
import { bootstrap }    from 'angular2/platform/browser';
import { Component } from 'angular2/core';
import { RouteConfig, RouterOutlet, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { DetailsComponent } from "./details/details.component";

@Component({
    selector: "app",
    template: `
        <header>App:{{name}} - </header>
        <main><router-outlet></router-outlet></main>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/details', name: 'Details', component: DetailsComponent, useAsDefault: true }
])
export class App {
    name = "Home"
}

bootstrap(App, [ROUTER_PROVIDERS]);
