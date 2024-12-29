import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ifair } from 'src/app/shared/model/fair';
import { FairService } from 'src/app/shared/service/fair.service';

@Component({
  selector: 'app-fair-details',
  templateUrl: './fair-details.component.html',
  styleUrls: ['./fair-details.component.scss']
})
export class FairDetailsComponent implements OnInit {
fairid!:string;

fairobj!:Ifair
  constructor(
    private _routes:ActivatedRoute,
    private _fairservice:FairService
  ) { }

  ngOnInit(): void {
    this._routes.params
    .subscribe((params:Params)=>{
      this.fairid = params['fairId']


      if(this.fairid){
        this._fairservice.fetchfair(this.fairid)
        .subscribe(data=>{
          this.fairobj = data //it gives single fair obj
        })
      }
    })
  }

}
