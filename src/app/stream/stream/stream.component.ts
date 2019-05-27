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
