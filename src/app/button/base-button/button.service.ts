import { Inject, Injectable } from '@angular/core';
import { Button } from './button';
import { config } from '../../config';
import { ButtonConfig } from '../../button-config';

@Injectable()
export class ButtonService implements Button {
    private counter = 0;

    constructor(@Inject(config) private config: ButtonConfig) {
    }

    calculate(): number {
        return this.counter++;
    }

    getLabel(): string {
        return 'Base Button Label';
    }
}
