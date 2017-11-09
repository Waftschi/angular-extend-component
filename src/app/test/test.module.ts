import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { TestButtonComponent } from './test/test-button/test-button.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [TestComponent, TestButtonComponent],
    exports: [TestButtonComponent]
})
export class TestModule {
}
