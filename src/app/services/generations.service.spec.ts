import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { GenerationsService } from './generations.service';

describe('GenerationsService', () => {
  let service: GenerationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(GenerationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
