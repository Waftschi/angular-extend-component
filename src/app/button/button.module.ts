import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseButtonComponent } from './base-button/base-button.component';
import { ButtonService } from './base-button/button.service';
import { NewButtonService } from '../new-button.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [BaseButtonComponent],
    exports: [BaseButtonComponent],
    providers: []
})
export class ButtonModule {
}
