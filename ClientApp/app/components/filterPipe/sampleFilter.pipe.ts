import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sample' })
export class SamplePipe implements PipeTransform {
  transform(samples: any, searchText: any): any {
    if(searchText == null) return samples;

    return samples.filter(function(sample){
        return sample.SampleName.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    })
  }
}