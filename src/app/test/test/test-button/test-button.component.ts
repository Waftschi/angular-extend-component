import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ButtonService } from '../../../button/base-button/button.service';


@Component({
    selector: 'app-test-button',
    templateUrl: './test-button.component.html',
    styleUrls: ['./test-button.component.css']
})
export class TestButtonComponent implements OnInit {
    label: string;
    counter = 10;
    @Output()
    triggerEvent = new EventEmitter<number>();

    constructor(private buttonService: ButtonService) {
    }

    ngOnInit() {
        this.label = this.buttonService.getLabel();
    }

    testCounter() {
        this.counter = this.buttonService.calculate();
        this.triggerEvent.emit(this.counter);
    }
}

