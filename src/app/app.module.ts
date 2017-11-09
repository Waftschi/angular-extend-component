import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { FactoryService } from './lib/factory.service';
import { HttpModule } from '@angular/http';
import { AppService } from './app.service';
import { ButtonModule } from './button/button.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    imports: [
        BrowserModule,
        HttpModule,
        ButtonModule
    ],
    providers: [FactoryService, AppService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
