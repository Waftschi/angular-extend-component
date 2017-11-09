import { Component, OnInit } from '@angular/core';
import { BaseButtonComponent } from '../base-button/base-button.component';

@Component({
    selector: 'app-my-button',
    templateUrl: './my-button.component.html',
    styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent extends BaseButtonComponent implements OnInit {
    private counter = 0;

    constructor() {
        super();
    }

    ngOnInit() {
    }

    addCounter() {
        this.counter++;
        this.triggerEvent.emit(this.counter);
    }

}
