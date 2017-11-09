import { Component, OnInit } from '@angular/core';
import { BaseButtonComponent } from '../../../button/base-button/base-button.component';

@Component({
    selector: 'app-test-button',
    templateUrl: './test-button.component.html',
    styleUrls: ['./test-button.component.css']
})
export class TestButtonComponent extends BaseButtonComponent implements OnInit {
    counter = 10;

    constructor() {
        super();
    }

    ngOnInit() {
    }

    testCounter() {
        this.counter++;
        this.triggerEvent.emit(this.counter);
    }

}
