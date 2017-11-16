import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    testCounter: any;
    baseCounter: any;
    title = 'app';

    constructor(private appService: AppService) {
    }

    setFactory(type): void {
        this.appService.setFactory(type);
    }

    getUser() {
        this.appService.getUser();
    }


    showBaseCount(value) {
        this.baseCounter = value;
    }
}
