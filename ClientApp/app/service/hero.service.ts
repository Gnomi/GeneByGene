import { Injectable, Inject} from '@angular/core';
import { User } from '../models/user';
//import { USERS } from './mock-heroes';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
    private _originUrl: string;
    private userUrl = '/api/user';  // URL to web api
    
    constructor(private http: Http, @Inject('ORIGIN_URL') originUrl: string) {
        this._originUrl = originUrl;
    }

    //this.http.get(this._originUrl + '/api/user').subscribe(result => {
    //this.Users = result.json() as User[];

    public loadUser():User[] {
        let myUsers: User[];
        this.http.get(this._originUrl + '/api/user').subscribe(result => {
            myUsers = result.json() as User[];
        });
        return myUsers;
    }

       
       
    getHeroes(): Promise<User[]> {
        return this.http.get(this._originUrl + this.userUrl)
            .toPromise()
            .then(response => response.json() as User[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}