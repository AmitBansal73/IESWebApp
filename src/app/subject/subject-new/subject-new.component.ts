import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-subject-new',
  templateUrl: './subject-new.component.html',
  styleUrls: ['./subject-new.component.css']
})
export class SubjectNewComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  Submit():void{
    this.location.back();
  }

}
