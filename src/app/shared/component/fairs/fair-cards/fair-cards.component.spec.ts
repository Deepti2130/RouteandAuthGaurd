import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairCardsComponent } from './fair-cards.component';

describe('FairCardsComponent', () => {
  let component: FairCardsComponent;
  let fixture: ComponentFixture<FairCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FairCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
