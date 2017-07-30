import { Component, Inject, OnInit } from '@angular/core';
import { Sample } from '../../models/sample';
//import { Headers, Http } from '@angular/http';
import { SampleService } from '../../service/sample.service';
import { Status } from '../../models/status';

@Component({
    selector: 'sample',
    template: require('./sample.component.html'),
    providers: [SampleService]
})

export class SampleComponent implements OnInit {
    public samples: Sample[];
    errorMessage: String;
    public statuses: Status[];

    constructor(private sampleService: SampleService) {        
    }

    ngOnInit(): void {
        this.loadStatus();
        this.fetchSamples();
    }

    public getSamples(): void {
        this.sampleService.getSamples().then(a => this.samples = a);
    }

    fetchSamples(): void {
        this.sampleService.getSamplesWithObservable()
            .subscribe(a => this.samples = a,
            error => this.errorMessage = <any>error);
    }
    

    public loadStatus() {        
        //this.http.get(this._originUrl + '/api/status').subscribe(result => {
        //    this.statuses = result.json() as Status[];
        this.sampleService.getStatusesWithPromise().then(a => this.statuses = a);        
    }

    public getSamplesByName(searchName: string) {
        this.sampleService.getSamplesByUserWithPromise(searchName).then(a => this.samples = a);
        //this.http.get('/api/sample/Users/' + searchName).subscribe(result => {
        //        this.samples  = result.json() as Sample[];
        //    });
    }

    public getSamplesByStatus(selectedStatus: string) {
        this.sampleService.getSamplesByStatusWithPromise(selectedStatus).then(a => this.samples = a);
        //this.http.get('/api/sample/status/' + selectedStatus).subscribe(result => {
        //    this.samples = result.json() as Sample[];
        //});
    }

        //this.samples = [
        //    {sampleId: 1, barcode: "12345", createdAt: "2014-12-19 20:00:00", createdBy: "JON LEUNG", status: "ACTIVE"},
        //    {sampleId: 2, barcode: "22222",createdAt: "2014-12-19 20:00:00",createdBy: "FEi",status: "Received"}
        //];
     
}
//https://angular-2-training-book.rangle.io/handout/features/interfaces.html





    
 
