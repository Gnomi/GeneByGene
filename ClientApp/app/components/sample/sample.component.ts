import { Component, Inject, OnInit, OnChanges } from '@angular/core';
import { Sample } from '../../models/sample';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Status } from '../../models/status';
@Component({
    selector: 'sample',
    template: require('./sample.component.html')
})

export class SampleComponent implements OnInit {
    public samples: Sample[];

    public statuses: Status[];
    
    private _originUrl: string;

    constructor(private http: Http, @Inject('ORIGIN_URL') originUrl: string) {
        this._originUrl = originUrl;
    }

    ngOnInit(): void {
        this.loadStatus();
    }

    public loadStatus() {
        //const url = this._originUrl + '/api/status';
        //return this.http.get(url)
        //    .toPromise()
        //    .then(response => response.json().data as Status[])
        //    .catch(this.handleError);
        this.http.get(this._originUrl + '/api/status').subscribe(result => {
            this.statuses = result.json() as Status[];
        });
    }

    //constructor(private http: Http, @Inject('ORIGIN_URL') originUrl: string) {
    //    http.get(originUrl + '/api/status').subscribe(result => {
    //        this.statuses = result.json() as Status[];
    //    })
    //};
    ///api/sample/status/Received
    //constructor(private http: Http, @Inject('ORIGIN_URL') originUrl: string) {
    //    http.get(originUrl + '/api/sample').subscribe(result => {
    //        this.samples = result.json() as Sample[];
    //    })
    //}; 
    

    public getSamplesByName(searchName: string) {       
        this.http.get('/api/sample/Users/' + searchName).subscribe(result => {
                this.samples  = result.json() as Sample[];
            });
    }

    //getAllSamples(): Promise<Sample[]> {
    //    return this.http.get("/api/sample")
    //        .toPromise()
    //        .then(response => response.json().data as Sample[])
    //        .catch(this.handleError);
    //}


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    public getAllSamples() {
        this.http.get('/api/sample').subscribe(result => {
            this.samples = result.json() as Sample[];
        });
    }


    //getSamplesByStatus(selectedStatus: string): Promise<Sample[]> {
    //    const ssURL = "/api/sample/status/" + selectedStatus;
    //    return this.http.get(ssURL)
    //        .toPromise()
    //        .then(response => response.json().data as Sample[])
    //        .catch(this.handleError);
    //}

    public getSamplesByStatus(selectedStatus: string) {
        this.http.get('/api/sample/status/' + selectedStatus).subscribe(result => {
            this.samples = result.json() as Sample[];
        });
    }

    //constructor(http: Http) {
    //    http.get('/api/sample/status/Active').subscribe(result => {
    //        this.samples = result.json() as Sample[];
    //    });

        //this.samples = [
        //    {sampleId: 1, barcode: "12345", createdAt: "2014-12-19 20:00:00", createdBy: "JON LEUNG", status: "ACTIVE"},
        //    {sampleId: 2, barcode: "22222",createdAt: "2014-12-19 20:00:00",createdBy: "FEi",status: "Received"}
        //];

        //constructor(http: Http, @Inject('ORIGIN_URL') originUrl: string) {
        //    http.get(originUrl + '/api/SampleData/WeatherForecasts').subscribe(result => {
        //        this.forecasts = result.json() as WeatherForecast[];
        //    });
        //}
    //}
}
//https://angular-2-training-book.rangle.io/handout/features/interfaces.html





    
 
