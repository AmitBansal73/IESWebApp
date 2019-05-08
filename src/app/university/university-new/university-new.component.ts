import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-university-new',
  templateUrl: './university-new.component.html',
  styleUrls: ['./university-new.component.css']
})
export class UniversityNewComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  Submit():void{
    this.location.back();
  }

}
