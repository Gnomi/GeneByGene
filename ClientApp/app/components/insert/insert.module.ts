import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { InsertComponent } from './insert.component';
import { SampleFormComponent } from './sample-form.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        InsertComponent,
        SampleFormComponent
    ],
    bootstrap: [InsertComponent]
})
export class InsertModule { }