import { Component, OnInit } from '@angular/core';
//import { SamplePipe } from './sampleFilter.pipe';
import { Sample } from '../../models/sample';
import { SampleService } from '../../service/sample.service';



import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'barcode' })
export class SamplePipe implements PipeTransform {
    transform(samples: any, searchText: any): any {
        if (searchText == null) return samples;

        return samples.filter(function (sample) {
            return sample.barcode.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
        })
    }
}


@Component({
    selector: 'app-filter',
    templateUrl: './sampleFilter.component.html',
    providers: [SampleService]
})


export class SampleFilterComponent implements OnInit {
   
  records: Array<any>;
  isDesc: boolean = false;
  column: string = 'SampleName';
  constructor(private sampleService: SampleService) {
  }

  ngOnInit() {
      this.getSamples();
    //this.records= [
    //  { SampleID: 1,  SampleName: "Beverages", Description: "Coffees, teas" },
    //  { SampleID: 2,  SampleName: "Condiments", Description: "Sweet and savory sauces" },
    //  { SampleID: 3,  SampleName: "Confections", Description: "Desserts and candies" },
    //  { SampleID: 4,  SampleName: "Cheeses",  Description: "Smetana, Quark and Cheddar Cheese" },
    //  { SampleID: 5,  SampleName: "Grains/Cereals", Description: "Breads, crackers, pasta, and cereal" },
    //  { SampleID: 6,  SampleName: "Beverages", Description: "Beers, and ales" },
    //  { SampleID: 7,  SampleName: "Condiments", Description: "Selishes, spreads, and seasonings" },
    //  { SampleID: 8,  SampleName: "Confections", Description: "Sweet breads" },
    //  { SampleID: 9,  SampleName: "Cheeses",  Description: "Cheese Burger" },
    //  { SampleID: 10, SampleName: "Grains/Cereals", Description: "Breads, crackers, pasta, and cereal" }
    // ];
    // // this.sort(this.column);
  }



  public getSamples(): void {
      this.sampleService.getSamples().then(a => this.records = a);
  }
}