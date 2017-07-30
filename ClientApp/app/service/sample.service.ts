import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Sample } from '../models/sample';
import { User } from '../models/user';
import { Status } from '../models/status';

/////
///////http://www.concretepage.com/angular-2/angular-2-http-post-example#promise

@Injectable()
export class SampleService {
    private _originUrl: string;
    private sampleUrl = "/api/sample";
    private userUrl = '/api/user'; 
    private statusUrl = '/api/status'; 
    private _headers = new Headers({ 'Content-Type': 'application/json' });
    samples: Sample[];

    constructor(private http: Http, @Inject('ORIGIN_URL') originUrl: string) {
        this._originUrl = originUrl;        
    }


    getSamplesWithObservable(): Observable<Sample[]> {
        return this.http.get(this._originUrl + this.sampleUrl)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    }


    getSamplesWithPromise(): Promise<Sample[]> {
        return this.http.get(this._originUrl + this.sampleUrl).toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    }


    public getSamples(): Promise<Sample[]> {            
        return this.http.get(this._originUrl + this.sampleUrl)
            .toPromise()
            .then(response => response.json() as Sample[])
            .catch(this.handleError);
    }



    getUsersWithPromise(): Promise<User[]> {
        return this.http.get(this._originUrl + this.userUrl)
            .toPromise()
            .then(response => response.json() as User[])
            .catch(this.handleError);
    }

    getSamplesByUserWithPromise(searchName: string): Promise<Sample[]> {
        //const url = '${this._originUrl}/api/sample/status/${selectedStatus}';        
        return this.http.get(this._originUrl + '/api/sample/Users/' + searchName).toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    }
   
    getStatusesWithPromise(): Promise<Status[]> {
        return this.http.get(this._originUrl + this.statusUrl).toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    }
    
    //// example: api/sample/status/Received
    getSamplesByStatusWithPromise(selectedStatus: string): Promise<Sample[]> {
        //const url = '${this._originUrl}/api/sample/status/${selectedStatus}';        
        return this.http.get(this._originUrl + "/api/sample/status/" + selectedStatus).toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    }


    //post api/sample/status
    createNewSample(item: Sample): Promise<Sample> {        
        return this.http
            .post(this.sampleUrl,
            JSON.stringify(item),
            { headers: this._headers })
            .toPromise()
            .then(res => res.json().data as Sample);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }



    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleErrorObservable(error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }

    private handleErrorPromise(error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }	    
}