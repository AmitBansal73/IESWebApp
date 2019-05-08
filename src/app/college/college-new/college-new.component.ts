import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-college-new',
  templateUrl: './college-new.component.html',
  styleUrls: ['./college-new.component.css']
})
export class CollegeNewComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  Submit():void{

    this.location.back();
  }

}
