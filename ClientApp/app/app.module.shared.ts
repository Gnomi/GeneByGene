import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { HelloWorldComponent } from './components/helloworld/helloworld.component';
import { DemoFormComponent } from './components/demoform/demoform.component';
import { SampleComponent } from './components/sample/sample.component';
//import { FilteredList } from './components/clientside/filteredlist.component';
import { SampleFormComponent } from './components/insert/sample-form.component';
import { SubmittedComponent } from './components/insert/submitted.component';


export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        HelloWorldComponent,
        SampleFormComponent,
        SubmittedComponent,
        //FilteredList,
        DemoFormComponent,
        SampleComponent
         
    ],
    imports: [
        FormsModule, ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'hello', component: HelloWorldComponent }, 
            { path: 'demoform', component: DemoFormComponent },
            { path: 'sample', component: SampleComponent },            
            { path: 'New-Form', component: SampleFormComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
};
