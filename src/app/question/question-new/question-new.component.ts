import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-question-new',
  templateUrl: './question-new.component.html',
  styleUrls: ['./question-new.component.css']
})
export class QuestionNewComponent implements OnInit {

  constructor(  private location: Location) { }

  ngOnInit() {

  }

  Cancel():void{
    this.location.back();
  }

  Submit():void{
  this.location.back();
  }

}
