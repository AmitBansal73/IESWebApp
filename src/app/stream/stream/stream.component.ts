import { Component, OnInit } from '@angular/core';

import {Stream} from '../../model/stream'
import {StreamService} from '../../services/stream.service'

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css']
})
export class StreamComponent implements OnInit {

  streams:Stream[];
  selectedStream:Stream;
 /*streams: Stream[]= [
   {
     id:1,
     name:"Civil Engineering",
     description:"Civil Engineering"
   },
   {
    id:2,
    name:"Electrical Engineering",
    description:"Electrical Engineering"
  },
  {
    id:3,
    name:"Mechanical Engineering",
    description:"Mechanical Engineering"
  },
  {
    id:4,
    name:"Computer Engineering",
    description:"Computer Engineering"
  },
 ];*/

  constructor(private streamService : StreamService) { }

  ngOnInit() {
    this.getStreams();
  }
  public getStreams():void{
    this.streamService.getstream().subscribe(_stream=>{

      this.streams=_stream
    });
  }
}
