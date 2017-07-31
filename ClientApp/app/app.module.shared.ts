import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { SampleComponent } from './components/sample/sample.component';
//import { filteredAppComponent } from './components/filteredlist/filteredApp.component';
//import { FilteredList, FilterPipe } from './components/filteredlist/filteredlist.component';

import { SampleFilterComponent, SamplePipe } from './components/filterPipe/sampleFilter.component';
import { SampleFormComponent } from './components/insert/sample-form.component';
import { SubmittedComponent } from './components/insert/submitted.component';
import { SampleService } from './service/sample.service';
//import { HeroComponent } from './components/hero/hero.component';

export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,        
        SampleFormComponent,
        SubmittedComponent,                
        SampleFilterComponent, SamplePipe,         
        SampleComponent 
    ],
    providers: [SampleService],
    imports: [
        FormsModule, ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'sample', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },                        
                      
            { path: 'pipe', component: SampleFilterComponent },  
            { path: 'sample', component: SampleComponent },            
            { path: 'New-Form', component: SampleFormComponent },
            { path: '**', redirectTo: 'sample' }
        ])
    ]
};
