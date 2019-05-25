import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {CollegeService} from '../../services/college.service';
import {College} from '../../model/college';

import {University} from '../../model/university';
import {UniversityService} from '../../services/university.service';
import {StreamService} from '../../services/stream.service';
import { Stream } from 'src/app/model/stream';

@Component({
  selector: 'app-college-new',
  templateUrl: './college-new.component.html',
  styleUrls: ['./college-new.component.css']
})
export class CollegeNewComponent implements OnInit {

  universities:University[];

  selectedStream:Stream[];

  selectedUniversity:University= {UnivID:0,CollegeCount:0,Name:"" };

  college:any={
    CollegeID:0 , UnivID:this.selectedUniversity.UnivID  ,collegeName:"", Address:"",City:"" ,StreamCount:0,
    Streams: this.selectedStream
    
  };

   //college:College= { CollegeID:0 , UnivID:0  ,collegeName:"", Address:"",City:"" ,StreamCount:0};
  //stream:Stream={StreamID}
  stream:Stream={StreamID:0 ,StreamName:"" ,Description:"", CollegeCount:0};
  
  streams:Stream[];
  //course:any = {thiscollege, stream};

  constructor(
    private location: Location,
    private collegeService: CollegeService,
    private universityService : UniversityService,
    private streamService:StreamService
    ) { }

  ngOnInit() {
    this.GetUniversity();
    this.getStreams();
  }

  private GetUniversity():void{

    this.universityService.getUniversities()
    .subscribe(
      univ=> {
        //console.log(JSON.stringify(univ));
        this.universities = univ;
      }
    );
  }

  public getStreams():void{
    this.streamService.getstream().subscribe(_stream=>{

      this.streams=_stream
    });
  }

 

  Submit():void{

  
    console.log(JSON.stringify(this.selectedStream));
   
    this.college.streams = this.selectedStream;
    this.college.UnivID = this.selectedUniversity.UnivID;
    console.log(JSON.stringify(this.college));


       this.collegeService.addCollege(this.college).subscribe(univ=>
      {
      this.location.back();
      }
    );
  
    }
    


  Cancel():void{
    this.location.back();
  }
}
