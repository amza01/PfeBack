import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonDeReceptionComponent } from './bon-de-reception.component';

describe('BonDeReceptionComponent', () => {
  let component: BonDeReceptionComponent;
  let fixture: ComponentFixture<BonDeReceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BonDeReceptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BonDeReceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
