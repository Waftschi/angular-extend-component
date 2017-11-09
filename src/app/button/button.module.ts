import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseButtonComponent } from './base-button/base-button.component';
import { MyButtonComponent } from './my-button/my-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BaseButtonComponent, MyButtonComponent]
})
export class ButtonModule { }
