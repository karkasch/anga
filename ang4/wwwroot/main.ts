/// <reference path="../node_modules/angular2/platform/browser.d.ts" />
import { bootstrap }    from 'angular2/platform/browser';
import {Component} from 'angular2/core';


@Component({
    selector: 'hello-app',
    template: `
        <h1>Hello, {{name}}!</h1>
        Say hello to: <input [value]="name" (input)="name = $event.target.value">
    `
})
export class HelloApp {
    name: string = 'World';
}

bootstrap(HelloApp);
