import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonDeCommandeListComponent } from './bon-de-commande-list.component';

describe('BonDeCommandeListComponent', () => {
  let component: BonDeCommandeListComponent;
  let fixture: ComponentFixture<BonDeCommandeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BonDeCommandeListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BonDeCommandeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
