import { Component, OnInit } from '@angular/core';

import {Paper} from '../../../model/paper';
import {PaperService} from '../../../services/paper.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-paper',
  imports: [NgxPaginationModule, FormsModule, NgSelectModule, RouterLink],
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.css']
})

export class PaperComponent implements OnInit {
  p = 1;
  newPaper:boolean = false;

  papers : Paper[];
  SearchText:string;
  control:string;
  //searchtext:string;
  Searchcollege:string;

  constructor(private paperService: PaperService) { 

  }

  ngOnInit() {
    this.GetPapers();
  }

  public setcontrol(name:string ,textfield:string){
    this.control=name;
   // this.SearchText=textfield;
  }
  GetPapers():void{
    this.paperService.getPaper().subscribe(
      paper=> {
        this.papers = paper,
        console.log(paper);
      },
      error => console.log(error)
    );
  }

  search(val: string): Paper[] {
    return val ? this.papers.filter(paper => paper.UniversityName.toLowerCase().indexOf(val.toLowerCase()) === 0)
      : this.papers;
  }

  NewPaper(): void {
    this.newPaper = true;
  }

  onAdd(agreed: boolean){
    if(agreed)
    {
      this.newPaper = false;
    }
  }
}
