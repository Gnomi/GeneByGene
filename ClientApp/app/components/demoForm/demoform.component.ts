import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { Sample } from '../../models/sample';
import { Http } from '@angular/http';
import { Status } from '../../models/status';
import { User } from '../../models/user';

@Component({
    selector: 'demoform',
    templateUrl: './demoform.component.html'
})



    ///////http://blog.ng-book.com/the-ultimate-guide-to-forms-in-angular-2/
export class DemoFormComponent  {
   
    myForm: FormGroup;
    sku: AbstractControl;

    constructor(fb: FormBuilder) {
        this.myForm = fb.group({
            'sku': ['', Validators.required]
        });

        this.sku = this.myForm.controls['sku'];
    }

    onSubmit(value: string): void {
        console.log('you submitted value: ', value);
    }
}


/// public statuses: Status[];
    //public users: User[];
    //private _originUrl: string;
//public loadStatus() {
//        this.http.get(this._originUrl + '/api/status').subscribe(result => {
//            this.statuses = result.json() as Status[];
//        })
//    }

//    public loadUser() {
//        this.http.get(this._originUrl + '/api/user').subscribe(result => {
//            this.users = result.json() as User[];
//        })
//    }

//////                    <label for="createdAt" > Created at< /label>
//////    < input type= "text"
//////                           id= "createdAt"
//////placeholder = "1/3/2017"
//////name = "createdAt" >
//////    <div class='container-fluid' >
//////        <select id="selectedStatus" name= "selectedStatus" >
//////            <option *ngFor="let st of statuses"[value] = "st.status" >
//////                {{st.status }}
//////</option>
//////    < /select>

//////    < /div>

//////    < div class='container-fluid' >
//////        <select id="selectedUser" name= "selectedUser" >
//////            <option *ngFor="let u of users"[value] = "u.userId" >
//////                {{u.firstName }} { { u.lastName } }
//////</option>
//////    < /select>

//////    < /div>