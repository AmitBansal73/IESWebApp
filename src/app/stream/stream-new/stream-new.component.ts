import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Stream } from '../../model/stream';
import { StreamService } from '../../services/stream.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-stream-new',
  templateUrl: './stream-new.component.html',
  styleUrls: ['./stream-new.component.css']
})
export class StreamNewComponent implements OnInit {

  stream:Stream={StreamID:0,StreamName:"",Description:"",CollegeCount:0 };

  StreamName:string;
  StreamDescription:string;

  constructor(
    private streamService:StreamService,
    private location: Location) { }

  ngOnInit() {
  }

  Submit():void{

    this.streamService.addStream(this.stream).subscribe(_stream=>
    {
    this.location.back()
    });
  }

  Cancel():void{
    this.location.back();
  }
}
