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

    constructor(private appService: AppService) {}

    //
    getUser() {
        this.appService.getUser();
    }

    // doTestCount(value) {
    //     this.testCounter = value;
    // }
    //
    // doMyCount(value) {
    //     this.myCounter = value;
    // }


    showBaseCount(value) {
        this.baseCounter = value;
    }
}
