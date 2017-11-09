import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface TriggerBaseButton {
    triggerEvent: EventEmitter<any>;
}


@Component({
    selector: 'app-base-button',
    templateUrl: './base-button.component.html',
    styleUrls: ['./base-button.component.css']
})
export class BaseButtonComponent implements OnInit, TriggerBaseButton {
    @Output()
    triggerEvent = new EventEmitter<number>();

    constructor() {
        console.dir('was called');
    }

    ngOnInit() {
    }

    // trigger(value) {
    //     //this.triggerEvent.emit(value);
    // }

}
