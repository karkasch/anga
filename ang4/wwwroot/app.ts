﻿/// <reference path="../node_modules/angular2/platform/browser.d.ts" />
import { bootstrap } from 'angular2/platform/browser';
import { Component, provide } from 'angular2/core';
import { RouteConfig, RouterOutlet, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Location, LocationStrategy, HashLocationStrategy } from 'angular2/router';

import { DetailsComponent } from "./details/details.component";
import { PathsComponent } from "./paths/paths.component";
import { DetailsItemComponent } from "./details/details-item.component";
//import { LeftPanelComponent } from "./details/leftpanel/left-panel.component";

@Component({
    selector: "app",
    //templateUrl: "./wwwroot/index.html",
    template: `
<header>
    App: {{title}}
</header>
<main>
    <router-outlet></router-outlet>
</main>
`,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
        //{ path: '/details/...', name: 'details', component: DetailsComponent },
        { path: '/paths/...', name: 'Paths', component: PathsComponent, useAsDefault: true }
        //{ path: '/details/:id', name: 'DetailsItem', component: DetailsItemComponent }
])
export class App {
    title = "Home"
}


bootstrap(App, [ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy })]);
