import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-stream-new',
  templateUrl: './stream-new.component.html',
  styleUrls: ['./stream-new.component.css']
})
export class StreamNewComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  Submit():void{
    this.location.back();
  }


}
