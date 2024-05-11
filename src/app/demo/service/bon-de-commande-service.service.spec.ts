import { TestBed } from '@angular/core/testing';

import { BonDeCommandeServiceService } from './bon-de-commande-service.service';

describe('BonDeCommandeServiceService', () => {
  let service: BonDeCommandeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BonDeCommandeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
