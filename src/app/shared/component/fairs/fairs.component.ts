import { Component, OnInit } from '@angular/core';
import { Ifair } from '../../model/fair';
import { FairService } from '../../service/fair.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fairs',
  templateUrl: './fairs.component.html',
  styleUrls: ['./fairs.component.scss']
})
export class FairsComponent implements OnInit {
fairArr!:Array<Ifair>

selectedfairId!:string
  constructor(
    private _fairservice:FairService,
    private _router:Router,
    private _routes:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.fairArr= this._fairservice.fetchFairdata()

    this.selectedfairId = this.fairArr[0].fairId
    this._router.navigate([this.fairArr[0].fairId],{
      relativeTo:this._routes
    })

  }

}
