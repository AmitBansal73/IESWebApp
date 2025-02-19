import { Component, OnInit } from '@angular/core';

import {Stream} from '../../../model/stream'
import {StreamService} from '../../../services/stream.service'
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-stream',
  imports:[ NgxPaginationModule, FormsModule, RouterLink],
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css']
})


export class StreamComponent implements OnInit {
  p = 1;
  streams:Stream[];
  selectedStream:Stream;
  SearchText;

  constructor(private streamService : StreamService) { }

  ngOnInit() {
    this.getStreams();
  }
  public getStreams():void{
    this.streamService.getstream().subscribe(_stream=>{

      this.streams=_stream
    },
error => {
  console.log(error);
}
  );
  }
}
