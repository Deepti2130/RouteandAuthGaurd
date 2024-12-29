import { Component, Input, OnInit } from '@angular/core';
import { Ifair } from 'src/app/shared/model/fair';

@Component({
  selector: 'app-fair-cards',
  templateUrl: './fair-cards.component.html',
  styleUrls: ['./fair-cards.component.scss']
})
export class FairCardsComponent implements OnInit {
@Input() fairobj!:Ifair;
@Input() selectedfairId!:string
  constructor() { }

  ngOnInit(): void {
  }

}
