import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { PokemonsService } from './pokemons.service';

describe('PokemonsService', () => {
  let service: PokemonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(PokemonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
