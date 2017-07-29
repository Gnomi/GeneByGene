import { Component } from '@angular/core';
import { Sample } from '../../models/sample';
import { Status } from '../../models/status';
import { User } from '../../models/user';
//import { get } from "http";

@Component({
    //The @Component selector value of "sample-form" means you can drop this form in a parent template with a <sample-form> tag.
    selector: 'sample-form',
    templateUrl: './sample-form.component.html'
})

export class SampleFormComponent {
    model = new Sample(1, "123456", '7/28/2017', 1, 1, new Status(1, "Received"), new User( 1, "jon", "Leung"));

    Statuses = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];
    submitted = false;
    onSubmit() {
        this.submitted = true;

     // TODO: Remove this when we're done
     //get diagnostic() { return JSON.stringify(this.model); }
    }
}