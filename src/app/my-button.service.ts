import { Injectable } from '@angular/core';
import { Button } from './button/base-button/button';



@Injectable()
export class MyButtonService implements Button {
    private counter = 0;

    constructor() {
    }

    calculate(): number {
        return this.counter++;
    }

    getLabel(): string {
        return 'My Button Label';
    }
}
