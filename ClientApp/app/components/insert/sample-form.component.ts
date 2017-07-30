
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
///class files
import { Sample } from '../../models/sample';
import { User } from '../../models/user';
import { Status } from '../../models/status';
//to show what has been submitted
import { SubmittedComponent } from './submitted.component';
import { SampleService } from '../../service/sample.service';

@Component({
    selector: 'sample-form-reactive',
    templateUrl: './sample-form.component.html',
    providers: [SampleService]
})

export class SampleFormComponent implements OnInit {
    statuses: Status[];
    users: User[];    
    sampleForm: FormGroup;

    public mySample = new Sample(0, '', new Date(Date.now()), 1, 0, null, null);
    submitted = false;
     
    // Reset the form with a new sample AND restore 'pristine' class state
    // by toggling 'active' flag which causes the form
    
    // TODO: Workaround until NgForm has a reset method (#6822)
    active = true;
    addSample() {
        this.mySample = new Sample(0, '', new Date(Date.now()), 0, 0, null, null);
        this.buildForm();
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    constructor(private fb: FormBuilder, private sampleService: SampleService) {        
    }
    
    ngOnInit(): void {
        this.buildForm();
        this.loadUser();
        this.loadStatus();
    }

    buildForm(): void {
        this.sampleForm = this.fb.group({
            'barcode': [this.mySample.barcode, [
                Validators.required,
                Validators.minLength(1),
                Validators.maxLength(50)                
            ]
            ],
            'createdAt': [this.mySample.createdAt],
            'status': [this.mySample.statusId, Validators.required],
            'user': [this.mySample.userId]
        });

        this.sampleForm.valueChanges
            .subscribe(data => this.onValueChanged(data));

        this.onValueChanged(); // (re)set validation messages now
    }


    onSubmit() {
        
        this.submitted = true;        
        this.mySample = this.sampleForm.value;
        this.mySample.barcode = this.sampleForm.controls["barcode"].value;
        this.mySample.createdAt = this.sampleForm.controls["createdAt"].value;
        this.mySample.statusId = this.sampleForm.controls["status"].value;
        this.mySample.userId = this.sampleForm.controls["user"].value;
        
        

        this.sampleService.createNewSample(this.mySample).then(a => {
            this.mySample = null;
        });
        //this.create(this.mySample);        
    }
    
    //create(item: Sample): Promise<Sample> {
    //    //alert(JSON.stringify(item));

    //        return this.http
    //        .post(this.sampleUrl,
    //        JSON.stringify(item),
    //        { headers: this.headers })
    //        .toPromise()
    //        .then(res => res.json().data as Sample);

    //}

    public loadStatus() {
        this.sampleService.getStatusesWithPromise().then(a => this.statuses = a);  
    }
    public loadUser() {
        this.sampleService.getUsersWithPromise().then(a => this.users = a);  
    }

    onValueChanged(data?: any) {
        if (!this.sampleForm) { return; }
        const form = this.sampleForm;

        for (const field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            const control = form.get(field);

            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }

    formErrors = {
        'barcode': '',
        'status': '',
        'user' : ''
    };

    validationMessages = {
        'barcode': {
            'required': 'barcode is required.',
            'minlength': 'barcode must be at least 5 characters long.',
            'maxlength': 'barcode cannot be more than 20 characters long.'            
        },
        'status': {
            'status': 'Status is required.'
        },
        'user': {
            'user': 'User is required.'
        }
    };
    
    //get diagnostic() { return JSON.stringify(this.heroForm.value); }    
}

