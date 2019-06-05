import { Pipe , PipeTransform } from '@angular/core';
import { keys, numberFormat } from 'highcharts';

@Pipe({ name: 'search' })

export class search {

    transform(value: any, searchText: any ,controlname:string): any {
        if(!searchText) {
          return value;
        }
        return value.filter((data) => this.matchValue(data,searchText ,controlname)); 
      }
    
      matchValue(data, value ,controlname) {
        /*console.log("Data : "+data+"\n Value : "+value);
        //console.log("Key===>>>: "+Object.keys(data)[7]);
        return Object.keys(data).map((key) => {
          console.log("Key===>>>: "+key);
         // console.log(new RegExp(value, 'gi').test(data[key]));
           return new RegExp(value, 'gi').test(data[key]);
        }).some(result => result);*/
       
        let index=Object.keys(data).indexOf(controlname);
        var key=Object.keys(data)[index];
        console.log(index+"     "+ key);
        return(new RegExp(value, 'gi').test(data[key]));
      }
}