import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonService } from './button.service';


export interface TriggerBaseButton {
    buttonService: ButtonService;
    triggerEvent: EventEmitter<any>;

    calculate(): void;
}

@Component({
    selector: 'app-base-button',
    templateUrl: './base-button.component.html',
    styleUrls: ['./base-button.component.css']
})
export class BaseButtonComponent implements OnInit, TriggerBaseButton {
    label: string;

    @Output()
    triggerEvent = new EventEmitter<number>();

    constructor(public buttonService: ButtonService) {
    }

    ngOnInit() {
        this.label = this.buttonService.getLabel();
    }

    calculate() {
        this.triggerEvent.emit(this.buttonService.calculate());
    }

}
