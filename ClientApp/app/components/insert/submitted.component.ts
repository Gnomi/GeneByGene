import { Component, EventEmitter, Input, Output } from '@angular/core';


import { Sample } from '../../models/sample';

@Component({
  selector: 'sample-submitted',
  template: `
  <div *ngIf="submitted">
    <h2>You submitted successfully.</h2>
    <div class="row">
      <div class="col-xs-3">barcode</div>
      <div class="col-xs-9  pull-left">{{ sample.barcode }}</div>
    </div>
    <div class="row">
      <div class="col-xs-3">Created At</div>
      <div class="col-xs-9 pull-left">{{ sample.createdAt }}</div>
    </div>
 
    
<br>   
  </div>`
})


//<sample-submitted[sample]="mySample"[(submitted)] = "submitted" > </sample-submitted>

export class SubmittedComponent {
  @Input()  sample: Sample;
  @Input()  submitted = false;
  @Output() submittedChange = new EventEmitter<boolean>();
  //   <button class="btn btn-default"(click) = "onClick()" > Edit < /button>
  //onClick() { this.submittedChange.emit(false); }
}
