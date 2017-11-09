import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-base-button',
    templateUrl: './base-button.component.html',
    styleUrls: ['./base-button.component.css']
})
export class BaseButtonComponent implements OnInit {

    constructor() {
        console.dir('was called');
    }

    ngOnInit() {
    }

}
