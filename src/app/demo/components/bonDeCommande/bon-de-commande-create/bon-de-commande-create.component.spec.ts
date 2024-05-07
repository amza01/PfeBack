import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonDeCommandeCreateComponent } from './bon-de-commande-create.component';

describe('BonDeCommandeCreateComponent', () => {
  let component: BonDeCommandeCreateComponent;
  let fixture: ComponentFixture<BonDeCommandeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BonDeCommandeCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BonDeCommandeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
